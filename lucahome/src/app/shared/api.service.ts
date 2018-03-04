import { Injectable } from '@angular/core';
import { Decrypt } from "../crypto/decrypt.c";
import { Encrypt } from "../crypto/encrypt.c";
import { ILucaApiService } from "./api.service.i";

@Injectable()
export class ApiService implements ILucaApiService {

  constructor() { }

  public SendCommand(command: string): string {
    console.log(`Command is: ${command}`);
    return "";
  }

}

/*
Communication contains a handshake to share the key

1. Call:
  Handshake to say hello and receive the key

  1.1 Error:
    Return error to caller
  1.2 Success:
    Encrypt command with key using Encrypt.encrypt(command, key)

2. Call:
  Send encrypted command

  2.1 Error:
    Return error to caller
  2.2 Success:
    Decrypt response with key using Decrypt.decrypt(message, key)

*/
