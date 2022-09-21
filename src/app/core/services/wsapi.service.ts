import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { RacewithfriendsComponent } from 'src/app/pages/typeracer/racewithfriends/racewithfriends.component';

@Injectable({
  providedIn: 'root'
})
export class WsapiService {

  webSocketEndPoint: string = 'http://192.168.8.32:8080/ws';
    topic: string = "/topic/messages";
    topicPrivate: string = "/user/topic/private-messages";
    stompClient: any;
    appComponent: RacewithfriendsComponent;
    id!: string;
    currentUser: string ="";

    constructor(appComponent: RacewithfriendsComponent){
        this.appComponent = appComponent;
    }
    _connect() {
        //console.log("Initialize WebSocket Connection");

        const _this = this;
        // this syntax is new syntax
        this.stompClient = Stomp.over(function(){
        return new SockJS(_this.webSocketEndPoint)
        });
        //WebSocketHttpHeaders headers = new WebSocketHttpHeaders();
        _this.stompClient.connect({token: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2NTgyMzc5NjAsImlhdCI6MTY1ODIxOTk2MH0.sSbFRmXVCgdbWkIGxgHWFF1vXHoh7Wa4_bqOR3cA-sj5LMkSzaG6iWWXcXjB3uPeWaMiE9jNI3OGfMJ-j-qfgw"}, function (frame: any) {

            _this.appComponent.setUserToken(frame.headers['user-name']);
            // _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
            //     _this.onMessageReceived(sdkEvent);
            // });
            _this.stompClient.subscribe(_this.topicPrivate , function (sdkEvent: any) {
                _this.onMessageReceivedPrivate(sdkEvent);
            });
            _this.stompClient.subscribe("/user/topic/members" , function (sdkEvent: any) {
                _this.onListMembers(sdkEvent);
            });
            
            _this._sendPrivate("Welcome to \"Guest's Racetrack\".");

            //_this._sendPrivate("Guest has entered the racetrack.");
            
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);

    };

    _disconnect() {
        if (this.stompClient !== null) {

            this.stompClient.send("/app/private-close" + (this.id == ""? "": "/" + this.id), {token: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2NTgyMzc5NjAsImlhdCI6MTY1ODIxOTk2MH0.sSbFRmXVCgdbWkIGxgHWFF1vXHoh7Wa4_bqOR3cA-sj5LMkSzaG6iWWXcXjB3uPeWaMiE9jNI3OGfMJ-j-qfgw"}, JSON.stringify("") );

            this.stompClient.unsubscribe();
            this.stompClient.disconnect();
        }
        alert("Disconnected");
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error: string) {
        console.log("errorCallBack -> " + error);
        this._disconnect();
    }

    _sendPrivate(message: string) {
        this.stompClient.send("/app/private-message" + (this.id == ""? "": "/" + this.id), {token: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2NTgyMzc5NjAsImlhdCI6MTY1ODIxOTk2MH0.sSbFRmXVCgdbWkIGxgHWFF1vXHoh7Wa4_bqOR3cA-sj5LMkSzaG6iWWXcXjB3uPeWaMiE9jNI3OGfMJ-j-qfgw"}, JSON.stringify(message));
    }
    _sendPrivateToMember(message: string) {
        this.stompClient.send("/app/private-message" + (this.id == ""? "": "/" + this.id), {token: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE2NTgyMzc5NjAsImlhdCI6MTY1ODIxOTk2MH0.sSbFRmXVCgdbWkIGxgHWFF1vXHoh7Wa4_bqOR3cA-sj5LMkSzaG6iWWXcXjB3uPeWaMiE9jNI3OGfMJ-j-qfgw"}, JSON.stringify(message));
    }

    onMessageReceivedPrivate(message: any) {
        console.log("Message Private Recieved from Server :: " + message);
        console.log(message.body);
        this.appComponent.handlePrivateMessage(JSON.parse(message.body));
    }
    onListMembers(message: any) {
        console.log("Message Private Recieved from Server :: " + message);
        console.log(message.body);
        this.appComponent.handleMembers(JSON.parse(message.body));
    }
}
