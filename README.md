# Demystifying Exploitable Bugs in Smart Contracts

<p>
<a href="papers/icse23.pdf"> <img title="" src="resources/paper.jpg" alt="loading-ag-167" align="right" width="200"></a>

This project aims to provide a valuable resource for Web3 developers and security analysts by facilitating their understanding of exploitable bugs in smart contracts. We conduct a thorough analysis of exploitable bugs extracted from [code4rena](https://code4rena.com/) and classify each bug according to its nature.

Our initial research suggests that current automatic vulnerability detection techniques rely on overly simplistic and generic oracles, such as reentrancy, which may fail to detect functional bugs in smart contracts. We aim to raise awareness about the significance of functional bugs and encourage practitioners to develop more sophisticated and nuanced automatic semantical oracles to detect such bugs.
</p>

<br>

> 𝙼𝚘𝚜𝚝 𝚘𝚏 𝚝𝚑𝚎 𝚌𝚞𝚛𝚛𝚎𝚗𝚝 𝚊𝚞𝚝𝚘𝚖𝚊𝚝𝚒𝚌 𝚟𝚞𝚕𝚗𝚎𝚛𝚊𝚋𝚒𝚕𝚒𝚝𝚢 𝚍𝚎𝚝𝚎𝚌𝚝𝚒𝚘𝚗 𝚝𝚎𝚌𝚑𝚗𝚒𝚚𝚞𝚎𝚜 𝚛𝚎𝚕𝚢 𝚘𝚗 𝚘𝚟𝚎𝚛𝚕𝚢 𝚜𝚒𝚖𝚙𝚕𝚒𝚜𝚝𝚒𝚌 𝚊𝚗𝚍 𝚐𝚎𝚗𝚎𝚛𝚊𝚕 𝚘𝚛𝚊𝚌𝚕𝚎𝚜, 𝚜𝚞𝚌𝚑 𝚊𝚜 𝚛𝚎𝚎𝚗𝚝𝚛𝚊𝚗𝚌𝚢, 𝚠𝚑𝚒𝚌𝚑 𝚖𝚊𝚢 𝚗𝚘𝚝 𝚋𝚎 𝚜𝚞𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚏𝚘𝚛 𝚒𝚍𝚎𝚗𝚝𝚒𝚏𝚢𝚒𝚗𝚐 𝚏𝚞𝚗𝚌𝚝𝚒𝚘𝚗𝚊𝚕 𝚋𝚞𝚐𝚜 𝚒𝚗 𝚜𝚖𝚊𝚛𝚝 𝚌𝚘𝚗𝚝𝚛𝚊𝚌𝚝𝚜.

<br>

Please be aware that __this repository is currently undergoing active development, and the data may change over time due to ongoing code4rena contests__.

## Vulnerability Detection with Automatic Semantical Oracles

We plan to compile an extensive list of vulnerability detection techniques that prioritize the development of semantical oracles for smart contracts. We welcome any additional suggestions or contributions from the community to help expand and improve the list.


+ [Finding Permission Bugs in Smart Contracts with Role Mining](https://personal.ntu.edu.sg/yi_li/files/Liu2022FPB.pdf), which addresses access control issues.
+ [AChecker: Statically Detecting Smart Contract Access Control Vulnerabilities](https://people.ece.ubc.ca/mjulia/publications/ACheckerICSE2023.pdf), which addresses access control issues.


## Folder Structure

The dataset is organized into four folders:

+ [papers/](papers/): contains our ICSE23 paper summarizing our preliminary results, as well as the supplementary material for the paper.
+ [results/](results/): contains the bug classification in [bugs.csv](results/bugs.csv) and the description for each contest in [contests.csv](results/contests.csv).
+ [contracts/](contracts/): contains all the smart contracts that we examined, using the version at the time of the contest.
+ [reports/](reports/): contains all the reports provided by code4rena.

## Bug Labels

We classify the surveyed bugs into three main categories based on their nature: 

+ Out-of-scope bugs (denoted by __O__)
+ Bugs with simple and generic testing oracles (denoted by __L__)
+ Bugs that require high-level semantical oracles (denoted by __S__)

Please note that classifying functional bugs can be ambiguous, and we welcome any suggestions for improving our classification standards. We have also updated our classification since the ICSE23 paper, and we encourage you to refer to our current [classification standards](docs/standard.md) for more information.

### Out-of-scope Bugs

These are bugs that fall outside the scope of our study and are thus not analyzed further.

+ __O1__: These vulnerabilities can only be exploited by privileged users (e.g., rug pull), or when the privileged users make mistakes (e.g., applying incorrect configuration during deployment).
+ __O2__: We cannot access the source code of the project.
+ __O3__: These vulnerabilities can only be exploited with further actions by victim users (e.g., [EIP-4626 inflation attacks](https://ethereum-magicians.org/t/address-eip-4626-inflation-attacks-with-virtual-shares-and-assets/12677))
+ __O4__: Bugs that occur in off-chain components.
+ __O5__: Typo or trivial bugs that render the contract non-deployable or non-functional. We believe these types of bugs are unlikely to occur in contracts that are ready for audit or have been deployed.
+ __O6__: Bugs that are not considered as such by the project. This can be due to disagreements between the auditors and the project (common in early contests), no explicit code affected by the bug, or intentional behavior that aligns with the business model (where the business model may be flawed).
+ __O7__: Doubtful findings, which we believe may be invalid, duplicated, or non-critical (common in early contests).

### Bugs with Simple and Generic Testing Oracles

These are bugs that can be detected using simple and generic oracles and do not require an in-depth understanding of the code semantics.

+ __L1__: Reentrancy.
+ __L2__: Rounding issues or precision loss.
+ __L3__: Bugs that are caused by using uninitialized variables.
+ __L4__: Bugs that are caused by exceeding the gas limitation.
+ __L5__: Storage collision and confusion between proxy and implementation.
+ __L6__: Arbitrary external function call.
+ __L7__: Integer overflow and underflow.
+ __L8__: Revert issues caused by low-level calls or external libraries.
+ __L9__: Bugs that are caused by writing to memory that does not apply to the storage.
+ __LA__: Cryptographic issues.
+ __LB__: Using `tx.origin`.

### Bugs that Require High-level Semantical Oracles

These are bugs that require high-level semantical oracles to detect, as they arise from inconsistencies between the code implementation and the business model.

+ __S1__: Price oracle manipulation.
    + __S1-1__: AMM price oracle manipulation.
    + __S1-2__: Sandwich attack.
    + __S1-3__: Non-AMM price oracle manipulation.
+ __S2__: ID-related violations.
    + __S2-1__: ID can be arbitrarily set by users or lack of ID validation. ID can also be a project-specified variable (e.g., hash) or an address.
    + __S2-2__: Shared resource (e.g., token) without proper locks.
    + __S2-3__: ID uniqueness violation (i.e., an ID should be unique but it is not).
+ __S3__: Erroneous state updates.
    + __S3-1__: Missing state update.
    + __S3-2__: Incorrect state updates, e.g., a state update that should not be there.
+ __S4__: Business-flow atomicity violations.
    + __S4-1__: Lack of proper locks for a business flow consisting of multiple transactions.
+ __S5__: Privilege escalation and access control issues.
    + __S5-1__: Users can update privileged state variables arbitrarily (caused by lack of ID-unrelated input sanitization).
    + __S5-2__: Users can invoke some functions at a time they should not be able to do so.
    + __S5-3__: Privileged functions can be called by anyone or at any time.
+ __S6__: Erroneous accounting.
    + __S6-1__: Incorrect calculating order.
    + __S6-2__: Returning an unexpected value that deviates from the expected semantics specified for the contract.
    + __S6-3__: Calculations performed with incorrect numbers (e.g., `x = a + b` ==> `x = a + c`).
    + __S6-4__: Other accounting errors (e.g., `x = a + b` ==> `x = a - b`).
+ __SE__: Broken business models due to unexpected operations
    + __SE-1__: Unexpected function invocation sequences (e.g., external calls to dependent contracts).
    + __SE-2__: Unexpected environment or contract conditions (e.g., ChainLink returning outdated data or significant slippage occurring).
    + __SE-3__: A given function is invoked multiple times unexpectedly.
    + __SE-4__: Unexpected function arguments.
+ __SC__: Contract implementation-specific bugs. These bugs are difficult to categorize into the above categories.

## Contributing

We welcome all types of contributions to our project, including but not limited to:

+ Suggesting new reference techniques for prioritizing the development of semantical oracles for smart contract vulnerability detection. <font color="#ff0000"><strong>[Priorities]</strong></font>
+ Adding newly disclosed code4rena contest bugs.
+ Suggesting improvements to the classification standard
+ Correcting mislabeled bugs

Further details can be found in our [contribution guidelines](docs/contribution.md).

## Cite

+ Zhuo Zhang, Brian Zhang, Wen Xu, Zhiqiang Lin, "Demystifying Exploitable Bugs in Smart Contracts." In Proceedings of the 45th International Conference on Software Engineering, 2023.


## WIP

