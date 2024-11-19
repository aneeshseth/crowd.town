package spaces

import (
	"api/kv"

	"github.com/gorilla/websocket"
)

func CreateSpace(spaceID string, kv kv.KV, wsObject *websocket.Conn, userID string) error {
	err := kv.CreateSpaceOperation(spaceID, userID, wsObject)
	if err != nil {
		return err
	}
	return nil
}

func AddUserToSpace(spaceID string, userID string, kv kv.KV, wsObject *websocket.Conn) error {
	err := kv.AddToSpaceOperation(userID, spaceID, wsObject)
	if err != nil {
		return err
	}
	return nil
}
