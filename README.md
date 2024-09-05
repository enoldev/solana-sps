# Solana Transactions

This Substreams project allows you to retrieve Solana transactions filtered by one or several Program IDs (i.e. you will only receive transactions containing the specified Program IDs).
**NOTE:** Transactions containing voting instructions will NOT be present.

## Get Started


### Build the Substreams

```bash
substreams build
```

### Authenticate

To run your Substreams you will need to [authenticate](https://substreams.streamingfast.io/documentation/consume/authentication) yourself.

```bash
substreams auth
```

### Run your Substreams

```bash
substreams gui
```

## Understand the Generated Project

Only a `substreams.yaml` file has been generated. This file declares a Substreams module, `map_filtered_transactions`, which uses a Solana Foundational Module (a module built by the team).

```yaml
specVersion: v0.1.0
package:
  name: my_project
  version: v0.1.0

imports:
  solana: https://spkg.io/streamingfast/solana-common-v0.2.0.spkg // 1.

modules:
 - name: map_filtered_transactions // 2.
   use: solana:filtered_transactions_without_votes // 3.
   initialBlock: 3232324

network: solana

params:
  map_filtered_transactions: program:TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA // 4.
```
1. Import the Solana Foundational Modules.
2. Declare the `map_filtered_transactions` module, which you will run later.
3. Use the `filtered_transactions_without_votes` module from the Solana Foundational Modules.
Essentially, you are _using_ the Solana Foundational Module, which is pre-built for you.
4. Pass the regular expression to filter the transactions based on the specified Program IDs.
