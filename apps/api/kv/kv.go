package kv

import (
	"context"

	"github.com/gorilla/websocket"
	"github.com/redis/go-redis/v9"
)

type KvStore interface {
	AddToSpaceOperation(userID string, spaceID string) error
	CreateSpaceOperation(spaceID string, userID string) error
}

type userWs struct {
	userID string
	wsObject *websocket.Conn
}

type KV struct {
	kvClient *redis.Client
	ctx context.Context
}

var redisURI = "localhost:6379"

//room id = [{userid: ws}, {userid2: ws}]
var userMap map[string][]userWs

func (kv *KV) InitKV() {
	ctx := context.Background()
	rdb := redis.NewClient(&redis.Options{
        Addr:     redisURI,
        Password: "", 
        DB:       0,  
    })
	kv.kvClient = rdb	
	kv.ctx = ctx
}

func (kv *KV) AddToSpaceOperation(userID string, spaceID string, wsObject *websocket.Conn) error {
	userCreator := userWs{
		userID: userID,
		wsObject: wsObject,
	}
	userMap[spaceID] = append(userMap[spaceID], userCreator)

	return nil
}

func (kv *KV) CreateSpaceOperation(spaceID string, userID string, wsObject *websocket.Conn) error {
	kv.kvClient.Subscribe(kv.ctx, spaceID)

	userCreator := userWs{
		userID: userID,
		wsObject: wsObject,
	}
	userMap[spaceID] = []userWs{userCreator}
	return nil
}