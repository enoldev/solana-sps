import { Protobuf } from "as-proto";
import { Transactions } from "./pb/sol/transactions/v1/Transactions";
import { MyConfirmedTransaction } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleTriggers(bytes: Uint8Array): void {
  const input = Protobuf.decode<Transactions>(bytes, Transactions.decode);
  log.info("!!--------------------------------!!!!transaction {}", [input.transactions.length.toString()]);

  for (let i = 0; i < input.transactions.length; i++) {
    const confirmedTransaction = input.transactions[i];

    // Transaction hash is the first signature in the transaction
    if (confirmedTransaction.transaction !== null) {
      const hash = confirmedTransaction!!.transaction!!.signatures[0].toString();

      const entity = new MyConfirmedTransaction(hash);
      //entity.instructionsCount = confirmedTransaction!!.transaction!!.message!!.instructions.length;
      entity.instructionsCount = 0;
      entity.save();
    }
  }
}


