package main

import (
	"api/kv"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

type webSocketHandler struct {
	upgrader websocket.Upgrader
}

func (wsh webSocketHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	c, err := wsh.upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("error %s when upgrading connection to websocket", err)
		return
	}

	defer c.Close()

	//initializes kv store client
	k := kv.KV{}
	k.InitKV()

	createStatus := r.URL.Query().Get("create")
	spaceID := r.URL.Query().Get("space")
	userID := r.URL.Query().Get("user")

	if createStatus != "true" {
		err := k.AddToSpaceOperation(spaceID, userID, c)
		if err != nil {
			log.Fatalf(fmt.Sprintf("couldnt create space for user with user id: %s and space id: %s", userID, spaceID))
		}
		return
	}

	err = k.CreateSpaceOperation(spaceID, userID, c)
	if err != nil {
		log.Fatalf(fmt.Sprintf("couldnt create space for user with user id: %s and space id: %s", userID, spaceID))
	}
	err = k.AddToSpaceOperation(spaceID, userID, c)
	if err != nil {
		log.Fatalf(fmt.Sprintf("couldnt create space for user with user id: %s and space id: %s", userID, spaceID))
	}

}

func main() {
	webSocketHandler := webSocketHandler{
		upgrader: websocket.Upgrader{},
	}
	http.Handle("/space/join", webSocketHandler)
	log.Print("Starting server...")
	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}