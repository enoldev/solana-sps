// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0

import { Writer, Reader } from "as-proto";
import { MessageHeader } from "./MessageHeader";
import { CompiledInstruction } from "./CompiledInstruction";
import { MessageAddressTableLookup } from "./MessageAddressTableLookup";

export class Message {
  static encode(message: Message, writer: Writer): void {
    const header = message.header;
    if (header !== null) {
      writer.uint32(10);
      writer.fork();
      MessageHeader.encode(header, writer);
      writer.ldelim();
    }

    const accountKeys = message.accountKeys;
    if (accountKeys.length !== 0) {
      for (let i: i32 = 0; i < accountKeys.length; ++i) {
        writer.uint32(18);
        writer.bytes(accountKeys[i]);
      }
    }

    writer.uint32(26);
    writer.bytes(message.recentBlockhash);

    const instructions = message.instructions;
    for (let i: i32 = 0; i < instructions.length; ++i) {
      writer.uint32(34);
      writer.fork();
      CompiledInstruction.encode(instructions[i], writer);
      writer.ldelim();
    }

    writer.uint32(40);
    writer.bool(message.versioned);

    const addressTableLookups = message.addressTableLookups;
    for (let i: i32 = 0; i < addressTableLookups.length; ++i) {
      writer.uint32(50);
      writer.fork();
      MessageAddressTableLookup.encode(addressTableLookups[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Message {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Message();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = MessageHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.accountKeys.push(reader.bytes());
          break;

        case 3:
          message.recentBlockhash = reader.bytes();
          break;

        case 4:
          message.instructions.push(
            CompiledInstruction.decode(reader, reader.uint32())
          );
          break;

        case 5:
          message.versioned = reader.bool();
          break;

        case 6:
          message.addressTableLookups.push(
            MessageAddressTableLookup.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  header: MessageHeader | null;
  accountKeys: Array<Uint8Array>;
  recentBlockhash: Uint8Array;
  instructions: Array<CompiledInstruction>;
  versioned: bool;
  addressTableLookups: Array<MessageAddressTableLookup>;

  constructor(
    header: MessageHeader | null = null,
    accountKeys: Array<Uint8Array> = [],
    recentBlockhash: Uint8Array = new Uint8Array(0),
    instructions: Array<CompiledInstruction> = [],
    versioned: bool = false,
    addressTableLookups: Array<MessageAddressTableLookup> = []
  ) {
    this.header = header;
    this.accountKeys = accountKeys;
    this.recentBlockhash = recentBlockhash;
    this.instructions = instructions;
    this.versioned = versioned;
    this.addressTableLookups = addressTableLookups;
  }
}
