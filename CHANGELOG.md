# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.17.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.16.0...v1.17.0) (2025-08-05)


### Bug Fixes

* Bump `cypress` to resolve `CVE-2025-7783` in `form-data` (box/box-codegen[#769](https://github.com/box/box-typescript-sdk-gen/issues/769)) ([#677](https://github.com/box/box-typescript-sdk-gen/issues/677)) ([077413e](https://github.com/box/box-typescript-sdk-gen/commit/077413ec525fad4d8ebc4c7209fce20046731295))


### New Features and Enhancements

* Add AI spreadsheet processor (box/box-openapi[#533](https://github.com/box/box-typescript-sdk-gen/issues/533)) ([#649](https://github.com/box/box-typescript-sdk-gen/issues/649)) ([254fb54](https://github.com/box/box-typescript-sdk-gen/commit/254fb54d928ec3a76304674f341be1c67d78a143))
* Add Archive Public API (box/box-openapi[#540](https://github.com/box/box-typescript-sdk-gen/issues/540)) ([#674](https://github.com/box/box-typescript-sdk-gen/issues/674)) ([1cbb124](https://github.com/box/box-typescript-sdk-gen/commit/1cbb12485a417b813df8b6918cf3721ae781a286))
* Add new Hubs APIs and Hubs items API (box/box-openapi[#538](https://github.com/box/box-typescript-sdk-gen/issues/538)) ([#666](https://github.com/box/box-typescript-sdk-gen/issues/666)) ([25c9596](https://github.com/box/box-typescript-sdk-gen/commit/25c9596bc71fe88e0a2b6d5e01c65fa682c2fd38))
* Add new schema for `Metadata Error` (box/box-openapi[#539](https://github.com/box/box-typescript-sdk-gen/issues/539)) ([#667](https://github.com/box/box-typescript-sdk-gen/issues/667)) ([9af46ab](https://github.com/box/box-typescript-sdk-gen/commit/9af46abe837ee0d812bcc15f1edf0d5a6530bfe0))
* Allow injecting private key decryption mechanism for JWT (box/box-codegen[#754](https://github.com/box/box-typescript-sdk-gen/issues/754)) ([#656](https://github.com/box/box-typescript-sdk-gen/issues/656)) ([cb0c35d](https://github.com/box/box-typescript-sdk-gen/commit/cb0c35df4a5b3f9b8c611006dd33d480949a0d36))
* Improve webhook validation checks (box/box-codegen[#745](https://github.com/box/box-typescript-sdk-gen/issues/745)) ([#647](https://github.com/box/box-typescript-sdk-gen/issues/647)) ([98b3b92](https://github.com/box/box-typescript-sdk-gen/commit/98b3b9293ff3f0e5922d0772d87504770bb9303c))
* Retry request on network exception (box/box-codegen[#776](https://github.com/box/box-typescript-sdk-gen/issues/776)) ([#684](https://github.com/box/box-typescript-sdk-gen/issues/684)) ([c0c4dba](https://github.com/box/box-typescript-sdk-gen/commit/c0c4dbac40970d34da4c9e52fc43f029ae2f91a6))
* Support ESM build and tree-shaking (box/box-codegen[#762](https://github.com/box/box-typescript-sdk-gen/issues/762)) ([#663](https://github.com/box/box-typescript-sdk-gen/issues/663)) ([8ca3302](https://github.com/box/box-typescript-sdk-gen/commit/8ca33023d904edd596819c7c6df42022006274ed))
* Support Hubs beta endpoints (box/box-openapi[#531](https://github.com/box/box-typescript-sdk-gen/issues/531)) ([#641](https://github.com/box/box-typescript-sdk-gen/issues/641)) ([d8c7bb6](https://github.com/box/box-typescript-sdk-gen/commit/d8c7bb66736a3c4679b116916c61e2ead824a305))
* Support new tools in AI Studio (box/box-openapi[#534](https://github.com/box/box-typescript-sdk-gen/issues/534))  ([#652](https://github.com/box/box-typescript-sdk-gen/issues/652)) ([db2501b](https://github.com/box/box-typescript-sdk-gen/commit/db2501bb13fc6ecebbb4c535b4a19c9be2cf64c2))

## [1.16.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.15.1...v1.16.0) (2025-06-12)


### Bug Fixes

* Compute webhook signature with and without escaping the body (box/box-codegen[#737](https://github.com/box/box-typescript-sdk-gen/issues/737)) ([#627](https://github.com/box/box-typescript-sdk-gen/issues/627)) ([6a21b8e](https://github.com/box/box-typescript-sdk-gen/commit/6a21b8ed54ef26041feccaa5481951355965e514))
* Fix circular dependency in `boxNetworkClient` (box/box-codegen[#708](https://github.com/box/box-typescript-sdk-gen/issues/708)) ([#591](https://github.com/box/box-typescript-sdk-gen/issues/591)) ([b383889](https://github.com/box/box-typescript-sdk-gen/commit/b383889b9fdc91c6cfed7169e4d36a22a8c8a0fa))
* Fix downscope token to use `retrieveToken` method for token retrieval (box/box-codegen[#731](https://github.com/box/box-typescript-sdk-gen/issues/731)) ([#618](https://github.com/box/box-typescript-sdk-gen/issues/618)) ([90edb0c](https://github.com/box/box-typescript-sdk-gen/commit/90edb0cc9bddc474c20b8b83770a4d314843edab))
* Fix slash escaping when calculating webhook signature (box/box-codegen[#736](https://github.com/box/box-typescript-sdk-gen/issues/736)) ([#624](https://github.com/box/box-typescript-sdk-gen/issues/624)) ([a0307d0](https://github.com/box/box-typescript-sdk-gen/commit/a0307d0c4c5dfed1a66e395a1dfb4c8ff387561d))
* Handle list of strings in metadata filter (box/box-codegen[#716](https://github.com/box/box-typescript-sdk-gen/issues/716)) ([#597](https://github.com/box/box-typescript-sdk-gen/issues/597)) ([979ff2c](https://github.com/box/box-typescript-sdk-gen/commit/979ff2c82edce9a969444febf1896d866ca154bf))
* Improve file download to avoid storing content in memory (box/box-codegen[#701](https://github.com/box/box-typescript-sdk-gen/issues/701)) ([#589](https://github.com/box/box-typescript-sdk-gen/issues/589)) ([513a15e](https://github.com/box/box-typescript-sdk-gen/commit/513a15eb28736d28d665324949d145dd3387d27d))
* Modify utility functions for browser (box/box-codegen[#686](https://github.com/box/box-typescript-sdk-gen/issues/686)) ([#585](https://github.com/box/box-typescript-sdk-gen/issues/585)) ([7232170](https://github.com/box/box-typescript-sdk-gen/commit/7232170fe7901cb7ba9ebf79ffc6a7c0b376a1c8))
* Use constant-time comparison for HMAC signatures (box/box-codegen[#739](https://github.com/box/box-typescript-sdk-gen/issues/739)) ([#630](https://github.com/box/box-typescript-sdk-gen/issues/630)) ([efdcaaf](https://github.com/box/box-typescript-sdk-gen/commit/efdcaaf605fc6f14bbbf171e2797d73e97302bfe))


### New Features and Enhancements

* Add AI agents warnings; allow for more types of metadata value (box/box-openapi[#520](https://github.com/box/box-typescript-sdk-gen/issues/520)) ([#600](https://github.com/box/box-typescript-sdk-gen/issues/600)) ([a5a555f](https://github.com/box/box-typescript-sdk-gen/commit/a5a555f835df5b550b9839e3e1fcff5d9f2b9f96))
* Add security settings properties on sign template schema (box/box-openapi[#518](https://github.com/box/box-typescript-sdk-gen/issues/518)) ([#588](https://github.com/box/box-typescript-sdk-gen/issues/588)) ([dfd3e5f](https://github.com/box/box-typescript-sdk-gen/commit/dfd3e5f7ecf8a8e49d79ed7df4d7e1f88f3e8537))
* Add Shield Lists APIs (box/box-openapi[#528](https://github.com/box/box-typescript-sdk-gen/issues/528)) ([#622](https://github.com/box/box-typescript-sdk-gen/issues/622)) ([be3af44](https://github.com/box/box-typescript-sdk-gen/commit/be3af441a66da02254d38576bb9ec258142f6d2d))
* Add support of IBM models to AI API (box/box-openapi[#522](https://github.com/box/box-typescript-sdk-gen/issues/522)) ([#601](https://github.com/box/box-typescript-sdk-gen/issues/601)) ([b060b8c](https://github.com/box/box-typescript-sdk-gen/commit/b060b8c21a13abdfb12988f9c6e6beb014fa104f))
* Increase max items for ai extract endpoints (box/box-openapi[#525](https://github.com/box/box-typescript-sdk-gen/issues/525)) ([#602](https://github.com/box/box-typescript-sdk-gen/issues/602)) ([86c5d14](https://github.com/box/box-typescript-sdk-gen/commit/86c5d14bafe8789c306a1688bcf010207c302ca9))
* Update legal holds and AI models (box/box-openapi[#526](https://github.com/box/box-typescript-sdk-gen/issues/526)) ([#620](https://github.com/box/box-typescript-sdk-gen/issues/620)) ([de3df57](https://github.com/box/box-typescript-sdk-gen/commit/de3df57cc90577a49ea40de278bde423d17c4f06))

### [1.15.1](https://github.com/box/box-typescript-sdk-gen/compare/v1.15.0...v1.15.1) (2025-04-11)


### Bug Fixes

* Fix data sanitizer for TypeScript (box/box-codegen[#702](https://github.com/box/box-typescript-sdk-gen/issues/702)) ([#582](https://github.com/box/box-typescript-sdk-gen/issues/582)) ([eb79c0f](https://github.com/box/box-typescript-sdk-gen/commit/eb79c0faa11f40667289155e71b8893a96eb558a))

## [1.15.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.14.0...v1.15.0) (2025-04-10)


### New Features and Enhancements

* Support sensitive data sanitization in errors (box/box-codegen[#695](https://github.com/box/box-typescript-sdk-gen/issues/695)) ([#573](https://github.com/box/box-typescript-sdk-gen/issues/573)) ([488e76a](https://github.com/box/box-typescript-sdk-gen/commit/488e76a1e1f66d5d4ac56b16e6a7dae9e7f497a1))

## [1.14.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.13.2...v1.14.0) (2025-03-18)


### Bug Fixes

* Add `verification_phone_number` property to create sign request (box/box-openapi[#515](https://github.com/box/box-typescript-sdk-gen/issues/515)) ([#546](https://github.com/box/box-typescript-sdk-gen/issues/546)) ([916502c](https://github.com/box/box-typescript-sdk-gen/commit/916502c47cb4936ab93a40b3f1552c1860173a8e))


### New Features and Enhancements

* Add find app item for shared link endpoint (box/box-openapi[#514](https://github.com/box/box-typescript-sdk-gen/issues/514)) ([#545](https://github.com/box/box-typescript-sdk-gen/issues/545)) ([7c32eaf](https://github.com/box/box-typescript-sdk-gen/commit/7c32eaf2af3ef08299d9dd69e744304b20f4309f))
* Add Integration Mappings Teams API (box/box-openapi[#517](https://github.com/box/box-typescript-sdk-gen/issues/517)) ([#548](https://github.com/box/box-typescript-sdk-gen/issues/548)) ([6ce1c7c](https://github.com/box/box-typescript-sdk-gen/commit/6ce1c7c78c9bc5d70383065e95f01bc8133fdd52))
* Support upload with preflight check (box/box-codegen[#676](https://github.com/box/box-typescript-sdk-gen/issues/676)) ([#554](https://github.com/box/box-typescript-sdk-gen/issues/554)) ([e3aa784](https://github.com/box/box-typescript-sdk-gen/commit/e3aa784b73c7b473fdf06c05c7f657a54fc08e4c))

### [1.13.2](https://github.com/box/box-typescript-sdk-gen/compare/v1.13.1...v1.13.2) (2025-03-11)


### Bug Fixes

* Fix `rollup` plugin output directory in Typescript (box/box-codegen[#678](https://github.com/box/box-typescript-sdk-gen/issues/678)) ([#543](https://github.com/box/box-typescript-sdk-gen/issues/543)) ([f828d5e](https://github.com/box/box-typescript-sdk-gen/commit/f828d5e7e3079c48590e9766f0dccd25ee1af9ca))

### [1.13.1](https://github.com/box/box-typescript-sdk-gen/compare/v1.13.0...v1.13.1) (2025-03-07)


### Bug Fixes

* Split browser configuration in `package.json` for TypeScript (box/box-codegen[#672](https://github.com/box/box-typescript-sdk-gen/issues/672)) ([#538](https://github.com/box/box-typescript-sdk-gen/issues/538)) ([ca7e291](https://github.com/box/box-typescript-sdk-gen/commit/ca7e29180e450cbb346a76aadfdade1062559b1e))

## [1.13.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.12.0...v1.13.0) (2025-02-20)


### New Features and Enhancements

* Support AI Studio API (box/box-codegen[#626](https://github.com/box/box-typescript-sdk-gen/issues/626)) ([#520](https://github.com/box/box-typescript-sdk-gen/issues/520)) ([949b856](https://github.com/box/box-typescript-sdk-gen/commit/949b856ce1d77b1aa425b91b46440b46b383438a))

## [1.12.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.11.0...v1.12.0) (2025-02-06)


### New Features and Enhancements

* Add Box Sign shared requests (box/box-openapi[#504](https://github.com/box/box-typescript-sdk-gen/issues/504)) ([#491](https://github.com/box/box-typescript-sdk-gen/issues/491)) ([e90255c](https://github.com/box/box-typescript-sdk-gen/commit/e90255c5d97a7a1a10dd529b58426142c5c6f0d4))
* feat: Add hubs support to `/ai/ask`. Replace type of `items` property from `AiItemBase[]` to `AiItemAsk[]` in the `AiAsk` interface (box/box-codegen[#656](https://github.com/box/box-typescript-sdk-gen/issues/656)) ([#507](https://github.com/box/box-typescript-sdk-gen/issues/507)) ([9f29d8c](https://github.com/box/box-typescript-sdk-gen/commit/9f29d8cb1f1d3b8c7625da1ddb9f2abd62d133f0))
* Update `/ai/extract_structured` response schema (box/box-codegen[#641](https://github.com/box/box-typescript-sdk-gen/issues/641)) ([#498](https://github.com/box/box-typescript-sdk-gen/issues/498)) ([502ac11](https://github.com/box/box-typescript-sdk-gen/commit/502ac11a2ad4e56fceece0deb6a15dbfc8b429ff))

## [1.11.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.10.0...v1.11.0) (2025-01-21)


### Bug Fixes

* Add missing field assignments in constructor  (box/box-codegen[#646](https://github.com/box/box-typescript-sdk-gen/issues/646)) ([#485](https://github.com/box/box-typescript-sdk-gen/issues/485)) ([0592f7b](https://github.com/box/box-typescript-sdk-gen/commit/0592f7bcde962c50d88ec69f6c359af754200e56))
* Add missing token scope (box/box-openapi[#490](https://github.com/box/box-typescript-sdk-gen/issues/490)) ([#459](https://github.com/box/box-typescript-sdk-gen/issues/459)) ([f0c0d91](https://github.com/box/box-typescript-sdk-gen/commit/f0c0d918c6d1a6466f9c02c760e3cbee18dab940))
* correct parameters types in file representation (box/box-openapi[#503](https://github.com/box/box-typescript-sdk-gen/issues/503)) ([#489](https://github.com/box/box-typescript-sdk-gen/issues/489)) ([d11529a](https://github.com/box/box-typescript-sdk-gen/commit/d11529a2958504e9106996fd475f0d99825b6926))
* Fix invalid variant config for Integration mapping Slack (box/box-openapi[#492](https://github.com/box/box-typescript-sdk-gen/issues/492)) ([#462](https://github.com/box/box-typescript-sdk-gen/issues/462)) ([660dc6e](https://github.com/box/box-typescript-sdk-gen/commit/660dc6ecd0302930ef5ce4d051860bac69a12188))
* order of fields in the `IntegrationMapping` schema (box/box-openapi[#497](https://github.com/box/box-typescript-sdk-gen/issues/497)) ([#476](https://github.com/box/box-typescript-sdk-gen/issues/476)) ([93e2bc3](https://github.com/box/box-typescript-sdk-gen/commit/93e2bc3f878f28d11d66a680c75ef0c06eada991))
* Remove `eval` usage (box/box-codegen[#636](https://github.com/box/box-typescript-sdk-gen/issues/636)) ([#474](https://github.com/box/box-typescript-sdk-gen/issues/474)) ([7c86f34](https://github.com/box/box-typescript-sdk-gen/commit/7c86f345e863efa338ac5808c5ec43cb6c549953))
* Remove auth when cross origin redirect (box/box-codegen[#648](https://github.com/box/box-typescript-sdk-gen/issues/648)) ([#488](https://github.com/box/box-typescript-sdk-gen/issues/488)) ([56fb287](https://github.com/box/box-typescript-sdk-gen/commit/56fb2879ab70ef6d5584b2591ff9c8d3ade2b7d7))


### New Features and Enhancements

* Support Box Doc Gen API (box/box-codegen[#644](https://github.com/box/box-typescript-sdk-gen/issues/644)) ([#486](https://github.com/box/box-typescript-sdk-gen/issues/486)) ([0d3bc18](https://github.com/box/box-typescript-sdk-gen/commit/0d3bc1813e11c1e482794f57c0843823e7e4cbc8))
* Use extensible enums (box/box-codegen[#639](https://github.com/box/box-typescript-sdk-gen/issues/639)) ([#487](https://github.com/box/box-typescript-sdk-gen/issues/487)) ([2a24c7a](https://github.com/box/box-typescript-sdk-gen/commit/2a24c7a0dbc3c946a69c5081939943d9b184d441))

## [1.10.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.9.0...v1.10.0) (2024-12-30)


### Bug Fixes

* Remove unused parameter from `SignRequest` (box/box-openapi[#489](https://github.com/box/box-typescript-sdk-gen/issues/489)) ([#450](https://github.com/box/box-typescript-sdk-gen/issues/450)) ([f5683b7](https://github.com/box/box-typescript-sdk-gen/commit/f5683b703625dd8d504ca52100f692cb8440a474))


### New Features and Enhancements

* Add support for replacing the network client implementation (box/box-codegen[#629](https://github.com/box/box-typescript-sdk-gen/issues/629)) ([#454](https://github.com/box/box-typescript-sdk-gen/issues/454)) ([1cb7ddb](https://github.com/box/box-typescript-sdk-gen/commit/1cb7ddb3ada79cebc27fbfce9df90cd8ebad353c))
* Allow for customizing retry strategy (box/box-codegen[#635](https://github.com/box/box-typescript-sdk-gen/issues/635)) ([#457](https://github.com/box/box-typescript-sdk-gen/issues/457)) ([530ca33](https://github.com/box/box-typescript-sdk-gen/commit/530ca33ff3635581bd8ee91a82bc9f000b18812b))
* Support webhook message validation (box/box-codegen[#631](https://github.com/box/box-typescript-sdk-gen/issues/631)) ([#455](https://github.com/box/box-typescript-sdk-gen/issues/455)) ([09765a4](https://github.com/box/box-typescript-sdk-gen/commit/09765a42fe25f15095bd1bd0d1377f2da222c9e4))

## [1.9.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.8.0...v1.9.0) (2024-12-09)


### Bug Fixes

* Fix signature of `beforeRequest` method in `Interceptor` interface (box/box-codegen[#625](https://github.com/box/box-typescript-sdk-gen/issues/625)) ([#446](https://github.com/box/box-typescript-sdk-gen/issues/446)) ([ef2e765](https://github.com/box/box-typescript-sdk-gen/commit/ef2e7658cab705906325e40d6c7c6e96e5703201))


### New Features and Enhancements

* Add `aiAgent` info to `AIResponse` (box/box-codegen[#624](https://github.com/box/box-typescript-sdk-gen/issues/624)) ([#440](https://github.com/box/box-typescript-sdk-gen/issues/440)) ([24c2013](https://github.com/box/box-typescript-sdk-gen/commit/24c20131b8275d43ecb02f3c94ac8e6116de3ea9))
* Support optional `userId` parameter for updating files, folders and web links (box/box-openapi[#488](https://github.com/box/box-typescript-sdk-gen/issues/488)) ([#445](https://github.com/box/box-typescript-sdk-gen/issues/445)) ([874f259](https://github.com/box/box-typescript-sdk-gen/commit/874f259ce12e8440301ffb1b2b65a6765b87803f))

## [1.8.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.7.0...v1.8.0) (2024-12-03)


### Bug Fixes

* fix `additionalProperties` in `ClientError` (box/box-openapi[#477](https://github.com/box/box-typescript-sdk-gen/issues/477)) ([#385](https://github.com/box/box-typescript-sdk-gen/issues/385)) ([4547148](https://github.com/box/box-typescript-sdk-gen/commit/454714861019998b1fc6b7c44696b0178ffa022b))
* Fix chunked uploads in browser (box/box-codegen[#619](https://github.com/box/box-typescript-sdk-gen/issues/619)) ([#436](https://github.com/box/box-typescript-sdk-gen/issues/436)) ([0af2484](https://github.com/box/box-typescript-sdk-gen/commit/0af2484dd8387cce1a8c235068ac3f834f8ecf42))
* Support status codes with no content (box/box-codegen[#604](https://github.com/box/box-typescript-sdk-gen/issues/604)) ([#415](https://github.com/box/box-typescript-sdk-gen/issues/415)) ([c3f14c6](https://github.com/box/box-typescript-sdk-gen/commit/c3f14c6af55ab78ed5dc981909c67397b0d7219e))
* update client error schema to support schema errors (box/box-openapi[#467](https://github.com/box/box-typescript-sdk-gen/issues/467)) ([#381](https://github.com/box/box-typescript-sdk-gen/issues/381)) ([b845f12](https://github.com/box/box-typescript-sdk-gen/commit/b845f12d194d5f4e0cfd66db1db294e2f9a9bff8))
* update integration mapping response description (box/box-openapi[#463](https://github.com/box/box-typescript-sdk-gen/issues/463)) ([#379](https://github.com/box/box-typescript-sdk-gen/issues/379)) ([e3d71e1](https://github.com/box/box-typescript-sdk-gen/commit/e3d71e100500c5fa9e478b5228fd395f68242cf2))


### New Features and Enhancements

* add AI LLM endpoint AWS `params` (box/box-openapi[#478](https://github.com/box/box-typescript-sdk-gen/issues/478)) ([#388](https://github.com/box/box-typescript-sdk-gen/issues/388)) ([d2fd1ec](https://github.com/box/box-typescript-sdk-gen/commit/d2fd1ec4bddb19b353e286908c99477e08b90457))
* Expose method for making custom HTTP requests, convert `FetchOptions` into a class (box/box-codegen[#610](https://github.com/box/box-typescript-sdk-gen/issues/610)) ([#431](https://github.com/box/box-typescript-sdk-gen/issues/431)) ([9a9ea62](https://github.com/box/box-typescript-sdk-gen/commit/9a9ea628fd21001437d92b32f1760d5ba14cb46b))
* Support get collection by ID endpoint (box/box-codegen[#595](https://github.com/box/box-typescript-sdk-gen/issues/595)) ([#396](https://github.com/box/box-typescript-sdk-gen/issues/396)) ([f1f47be](https://github.com/box/box-typescript-sdk-gen/commit/f1f47bebfc0981a5e67f301b6fc2e3a8568d5845))
* Support getting file download URL and file thumbnail URL (box/box-codegen[#617](https://github.com/box/box-typescript-sdk-gen/issues/617)) ([#435](https://github.com/box/box-typescript-sdk-gen/issues/435)) ([1cb4d5d](https://github.com/box/box-typescript-sdk-gen/commit/1cb4d5d93fbd94b952b876457008973a92d5aa23))
* Support `nullable` fields in TypeScript (box/box-codegen[#612](https://github.com/box/box-typescript-sdk-gen/issues/612)) ([#425](https://github.com/box/box-typescript-sdk-gen/issues/425)) ([991dc29](https://github.com/box/box-typescript-sdk-gen/commit/991dc29bc805bf0c5198277142efb9a85de1dd42))

## [1.7.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.6.0...v1.7.0) (2024-10-17)


### New Features and Enhancements

* Include raw data in response object (box/box-codegen[#576](https://github.com/box/box-typescript-sdk-gen/issues/576)) ([#375](https://github.com/box/box-typescript-sdk-gen/issues/375)) ([bdb9d0c](https://github.com/box/box-typescript-sdk-gen/commit/bdb9d0caab1a54ca56aef5de4260215d1d3fbd35))
* Support `ai/extract` and `ai/extract_structured` endpoints (box/box-codegen[#566](https://github.com/box/box-typescript-sdk-gen/issues/566)) ([#356](https://github.com/box/box-typescript-sdk-gen/issues/356)) ([4a33562](https://github.com/box/box-typescript-sdk-gen/commit/4a335621c7eaa413162a5daa65d63d8353ba37f5))

## [1.6.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.5.1...v1.6.0) (2024-09-11)


### Bug Fixes

* Add the missing license to `package.json` (box/box-codegen[#562](https://github.com/box/box-typescript-sdk-gen/issues/562)) ([#343](https://github.com/box/box-typescript-sdk-gen/issues/343)) ([cc9a8b8](https://github.com/box/box-typescript-sdk-gen/commit/cc9a8b8ac628e348d32176f8ba69add649c555bd))
* Fix variants in metadata query results (box/box-openapi[#456](https://github.com/box/box-typescript-sdk-gen/issues/456)) ([#349](https://github.com/box/box-typescript-sdk-gen/issues/349)) ([2131e98](https://github.com/box/box-typescript-sdk-gen/commit/2131e98ff5530c7440ff50ec0da46cc317d0a4ae))


### New Features and Enhancements

* add Hubs Beta (box/box-openapi[#453](https://github.com/box/box-typescript-sdk-gen/issues/453)) ([#333](https://github.com/box/box-typescript-sdk-gen/issues/333)) ([40359c7](https://github.com/box/box-typescript-sdk-gen/commit/40359c71aa25ecfe7ec53bfa19de62b9d83d4ace))
* Add support for proxy (box/box-codegen[#559](https://github.com/box/box-typescript-sdk-gen/issues/559)) ([#337](https://github.com/box/box-typescript-sdk-gen/issues/337)) ([0ffd9c8](https://github.com/box/box-typescript-sdk-gen/commit/0ffd9c8095d1aa742144146383ae94f1f4526af0))

### [1.5.1](https://github.com/box/box-typescript-sdk-gen/compare/v1.5.0...v1.5.1) (2024-08-30)


### Bug Fixes

* Fix fetch options with interceptor (box/box-codegen[#556](https://github.com/box/box-typescript-sdk-gen/issues/556)) ([#326](https://github.com/box/box-typescript-sdk-gen/issues/326)) ([3751eea](https://github.com/box/box-typescript-sdk-gen/commit/3751eea67047021fe298c841596ae362ed1e47da))

## [1.5.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.4.0...v1.5.0) (2024-08-23)


### Bug Fixes

* Add missing fields to Sign Template Signer and fix AI schema (box/box-openapi[#451](https://github.com/box/box-typescript-sdk-gen/issues/451)) ([#317](https://github.com/box/box-typescript-sdk-gen/issues/317)) ([340fbd8](https://github.com/box/box-typescript-sdk-gen/commit/340fbd84f6fa408155c6a2a4b9b7b03b88f76f24))
* Fix `IntegrationMapping` schemas (box/box-codegen[#551](https://github.com/box/box-typescript-sdk-gen/issues/551)) ([#315](https://github.com/box/box-typescript-sdk-gen/issues/315)) ([a863b1e](https://github.com/box/box-typescript-sdk-gen/commit/a863b1eb8fcfccd78714e3f52ce96d89ef69ca72))


### New Features and Enhancements

* Add new parameters to Box AI methods and introduce `AiResponseFull` variant (box/box-openapi[#446](https://github.com/box/box-typescript-sdk-gen/issues/446)) ([#313](https://github.com/box/box-typescript-sdk-gen/issues/313)) ([d9664fd](https://github.com/box/box-typescript-sdk-gen/commit/d9664fd7d431685c8e115415085bbe69d17f272d))
* Include URL into `FetchOptions` (box/box-codegen[#549](https://github.com/box/box-typescript-sdk-gen/issues/549)) ([#319](https://github.com/box/box-typescript-sdk-gen/issues/319)) ([30eaa6b](https://github.com/box/box-typescript-sdk-gen/commit/30eaa6ba7aa0fcd5e2f71026d7bf58729d387221))

## [1.4.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.3.0...v1.4.0) (2024-08-12)


### Bug Fixes

* Add missing token scope (box/box-openapi[#442](https://github.com/box/box-typescript-sdk-gen/issues/442)) ([#281](https://github.com/box/box-typescript-sdk-gen/issues/281)) ([ca77f58](https://github.com/box/box-typescript-sdk-gen/commit/ca77f58b10d3a302748750584730f0fcdd8b4b55))
* Fix fetch method for multipart request (box/box-codegen[#545](https://github.com/box/box-typescript-sdk-gen/issues/545)) ([#303](https://github.com/box/box-typescript-sdk-gen/issues/303)) ([f8ceac0](https://github.com/box/box-typescript-sdk-gen/commit/f8ceac005f043017e7cde310490e79ab9195f8d7))


### New Features and Enhancements

* Parametrise chunked uploads endpoint urls (box/box-openapi[#444](https://github.com/box/box-typescript-sdk-gen/issues/444)) ([#302](https://github.com/box/box-typescript-sdk-gen/issues/302)) ([293a6e9](https://github.com/box/box-typescript-sdk-gen/commit/293a6e9aeabbba37e4c12e2322a79717a10e1775))
* **ts:** Add comments to properties and methods (box/box-codegen[#537](https://github.com/box/box-typescript-sdk-gen/issues/537)) ([#284](https://github.com/box/box-typescript-sdk-gen/issues/284)) ([db3a2b5](https://github.com/box/box-typescript-sdk-gen/commit/db3a2b57fbe0eec17373a2acf8089ff247c98225))

## [1.3.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.2.0...v1.3.0) (2024-07-24)


### Bug Fixes

* Extract `IntegrationMappingPartnerItemSlack` to union type (box/box-codegen[#530](https://github.com/box/box-typescript-sdk-gen/issues/530)) ([#255](https://github.com/box/box-typescript-sdk-gen/issues/255)) ([fa8952a](https://github.com/box/box-typescript-sdk-gen/commit/fa8952a6582d9965bbb4ab66bbeff057f5c68851))
* Improve chunked upload reliability (box/box-codegen[#529](https://github.com/box/box-typescript-sdk-gen/issues/529)) ([#254](https://github.com/box/box-typescript-sdk-gen/issues/254)) ([12d9288](https://github.com/box/box-typescript-sdk-gen/commit/12d928850e0a1cd60f336a9919474b9aaba33028))


### New Features and Enhancements

* Add `is_active` parameter to user collaboration (box/box-openapi[#437](https://github.com/box/box-typescript-sdk-gen/issues/437)) ([#253](https://github.com/box/box-typescript-sdk-gen/issues/253)) ([4d8d436](https://github.com/box/box-typescript-sdk-gen/commit/4d8d436977b3e487a47e7717626f1c0f2eb43227))
* Support AI Agent API (box/box-codegen[#531](https://github.com/box/box-typescript-sdk-gen/issues/531)) ([#260](https://github.com/box/box-typescript-sdk-gen/issues/260)) ([0ec40d4](https://github.com/box/box-typescript-sdk-gen/commit/0ec40d44c86a8a9cf4fe594966cfad1866be457c))

## [1.2.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.1.0...v1.2.0) (2024-07-08)


### Bug Fixes

* Fix upload in browser (box/box-codegen[#524](https://github.com/box/box-typescript-sdk-gen/issues/524)) ([#248](https://github.com/box/box-typescript-sdk-gen/issues/248)) ([88d747e](https://github.com/box/box-typescript-sdk-gen/commit/88d747e0f03dfa3c2d6089257c6e8b5b635775e0))
* Update chunked upload (box/box-codegen[#523](https://github.com/box/box-typescript-sdk-gen/issues/523)) ([#247](https://github.com/box/box-typescript-sdk-gen/issues/247)) ([27ceb35](https://github.com/box/box-typescript-sdk-gen/commit/27ceb35e6444843eea9b7ec6923fe958c9a74571))


### New Features and Enhancements

* Retry request with status code `202` (box/box-codegen[#511](https://github.com/box/box-typescript-sdk-gen/issues/511)) ([#235](https://github.com/box/box-typescript-sdk-gen/issues/235)) ([03b8f43](https://github.com/box/box-typescript-sdk-gen/commit/03b8f4314ada5ef5596706b7599cc76565fe96a5))
* Support extensible enum types in Typescript (box/box-codegen[#520](https://github.com/box/box-typescript-sdk-gen/issues/520)) ([#243](https://github.com/box/box-typescript-sdk-gen/issues/243)) ([5237972](https://github.com/box/box-typescript-sdk-gen/commit/523797273bc08e3b22609ef0019432ab3e43c3ba))

## [1.1.0](https://github.com/box/box-typescript-sdk-gen/compare/v1.0.0...v1.1.0) (2024-06-12)


### Bug Fixes

* Fix CI for auto update pull requests (box/box-codegen[#506](https://github.com/box/box-typescript-sdk-gen/issues/506)) ([#221](https://github.com/box/box-typescript-sdk-gen/issues/221)) ([bbc14f6](https://github.com/box/box-typescript-sdk-gen/commit/bbc14f66e14a9386c8d54a5d0bb36ec2cdc501c1))
* remove quotation mark when date or `datetime` is used in `queryParams` (box/box-codegen[#509](https://github.com/box/box-typescript-sdk-gen/issues/509)) ([#225](https://github.com/box/box-typescript-sdk-gen/issues/225)) ([28d2220](https://github.com/box/box-typescript-sdk-gen/commit/28d22200602cf02d73590189c304109f1c26db17))


### New Features and Enhancements

* add missing marker pagination fields and introduce new event type `AppItemEventSource` `(box/box-openapi[#431](https://github.com/box/box-typescript-sdk-gen/issues/431))` ([#224](https://github.com/box/box-typescript-sdk-gen/issues/224)) ([6c18ca3](https://github.com/box/box-typescript-sdk-gen/commit/6c18ca3b00da0b878d28e142a2361b6386ef0c15))

## [1.0.0](https://github.com/box/box-typescript-sdk-gen/compare/v0.5.4...v1.0.0) (2024-05-20)


### Bug Fixes

* Change base urls (box/box-codegen[#491](https://github.com/box/box-typescript-sdk-gen/issues/491)) ([#199](https://github.com/box/box-typescript-sdk-gen/issues/199)) ([8a732e9](https://github.com/box/box-typescript-sdk-gen/commit/8a732e9050c2434dddfb62ebd611d0794284165b))
* Fix schemas for updating classification on a file and folder (box/box-openapi[#423](https://github.com/box/box-typescript-sdk-gen/issues/423)) ([#188](https://github.com/box/box-typescript-sdk-gen/issues/188)) ([68ecb04](https://github.com/box/box-typescript-sdk-gen/commit/68ecb0435e14cd8e21e81cbb8763c49d25952a3d))
* Fix union deserialization (box/box-codegen[#493](https://github.com/box/box-typescript-sdk-gen/issues/493)) ([#202](https://github.com/box/box-typescript-sdk-gen/issues/202)) ([23b9016](https://github.com/box/box-typescript-sdk-gen/commit/23b901685dd83e9f94386c5c889ab1b1a7ee75f8))
* Stop exporting `PartAccumulator` class (box/box-codegen[#494](https://github.com/box/box-typescript-sdk-gen/issues/494)) ([#200](https://github.com/box/box-typescript-sdk-gen/issues/200)) ([98a668e](https://github.com/box/box-typescript-sdk-gen/commit/98a668e8dbdce931d5737172db57d61424f8d75a))


### New Features and Enhancements

* Add `suppressNotifications` and `externalSystemName` fields for Box Sign (box/box-openapi[#425](https://github.com/box/box-typescript-sdk-gen/issues/425)) ([#197](https://github.com/box/box-typescript-sdk-gen/issues/197)) ([f4e4d52](https://github.com/box/box-typescript-sdk-gen/commit/f4e4d52822d4f9ef291916c8e7986d4d5201789b))
* Move schemas to separate modules (box/box-codegen[#483](https://github.com/box/box-typescript-sdk-gen/issues/483)) ([#182](https://github.com/box/box-typescript-sdk-gen/issues/182)) ([cf55214](https://github.com/box/box-typescript-sdk-gen/commit/cf5521440a81543dc7ac032221c1778267cef2f4))
* Support excluding endpoints and schemas in parser (box/box-codegen[#487](https://github.com/box/box-typescript-sdk-gen/issues/487)) ([#183](https://github.com/box/box-typescript-sdk-gen/issues/183)) ([3bd6076](https://github.com/box/box-typescript-sdk-gen/commit/3bd6076c45dcae5db2bafbcb49364fa5629ec8ce))
* Strict checks during deserialization (box/box-codegen[#484](https://github.com/box/box-typescript-sdk-gen/issues/484)) ([#185](https://github.com/box/box-typescript-sdk-gen/issues/185)) ([469afb9](https://github.com/box/box-typescript-sdk-gen/commit/469afb951bd4dbbd2ef7af916084b6baf02040f6))

### [0.5.4](https://github.com/box/box-typescript-sdk-gen/compare/v0.5.3...v0.5.4) (2024-05-09)


### Bug Fixes

* Ensure AuthorizationManager in authentication classes is initialized with NetworkSession object (box/box-codegen[#469](https://github.com/box/box-typescript-sdk-gen/issues/469)) ([#140](https://github.com/box/box-typescript-sdk-gen/issues/140)) ([464bc25](https://github.com/box/box-typescript-sdk-gen/commit/464bc25ddef82f36bd19d0cfb37e4692e343f913))
* Fix Box AI endpoints (box/box-openapi[#418](https://github.com/box/box-typescript-sdk-gen/issues/418)) ([#171](https://github.com/box/box-typescript-sdk-gen/issues/171)) ([6450322](https://github.com/box/box-typescript-sdk-gen/commit/6450322d6868cd2bf26768ca3aafddcf3422b6cf))
* Fix metadata filter resource (box/box-openapi[#419](https://github.com/box/box-typescript-sdk-gen/issues/419)) ([#173](https://github.com/box/box-typescript-sdk-gen/issues/173)) ([38ca06c](https://github.com/box/box-typescript-sdk-gen/commit/38ca06c95627a5795b854ba2c749f7e627284685))
* Remove most of use of any in generated code (box/box-codegen[#475](https://github.com/box/box-typescript-sdk-gen/issues/475)) ([#166](https://github.com/box/box-typescript-sdk-gen/issues/166)) ([9fabddf](https://github.com/box/box-typescript-sdk-gen/commit/9fabddfed89358b309eac2208a5aaa21a441befd))


### New Features and Enhancements

* Define interfaces for headers input (box/box-codegen[#468](https://github.com/box/box-typescript-sdk-gen/issues/468)) ([#134](https://github.com/box/box-typescript-sdk-gen/issues/134)) ([28b266c](https://github.com/box/box-typescript-sdk-gen/commit/28b266c0747f477e226d99893931c259a4ad2262))
* pack optional arguments of API methods into a new record(box/box-codegen[#471](https://github.com/box/box-typescript-sdk-gen/issues/471)) ([#156](https://github.com/box/box-typescript-sdk-gen/issues/156)) ([2f311c9](https://github.com/box/box-typescript-sdk-gen/commit/2f311c919ed2b9bdb104f66e91f0feb6c8798a71))
* Support Box AI endpoints (box/box-openapi[#416](https://github.com/box/box-typescript-sdk-gen/issues/416)) ([#170](https://github.com/box/box-typescript-sdk-gen/issues/170)) ([febd8d0](https://github.com/box/box-typescript-sdk-gen/commit/febd8d026795238218a0246a736433f2b95767ba))
* Support Date and DateTime types (box/box-codegen[#476](https://github.com/box/box-typescript-sdk-gen/issues/476)) ([#152](https://github.com/box/box-typescript-sdk-gen/issues/152)) ([9939ea9](https://github.com/box/box-typescript-sdk-gen/commit/9939ea9a9bb614499def01e6c767c3ed678ba2ba))
* Support revoking and downscoping token for BoxDeveloperTokenAuth ([#147](https://github.com/box/box-typescript-sdk-gen/issues/147)) ([6d09845](https://github.com/box/box-typescript-sdk-gen/commit/6d0984524d82765da925bc2081eadba5a5d03c66))
* Support union of primitives and objects (box/box-codegen[#481](https://github.com/box/box-typescript-sdk-gen/issues/481)) ([#172](https://github.com/box/box-typescript-sdk-gen/issues/172)) ([c3c6457](https://github.com/box/box-typescript-sdk-gen/commit/c3c6457bb069fe04df0c664ad6056a357077d55b))

### [0.5.3](https://github.com/box/box-typescript-sdk-gen/compare/v0.5.2...v0.5.3) (2024-04-04)


### Bug Fixes

* **docs:** fixes for chunked uploads docs (box/box-codegen[#457](https://github.com/box/box-typescript-sdk-gen/issues/457)) ([#128](https://github.com/box/box-typescript-sdk-gen/issues/128)) ([c94dbf5](https://github.com/box/box-typescript-sdk-gen/commit/c94dbf5926010e2bec8fc54c317999957a2f3eab))


### New Features and Enhancements

* Assign default value to fields and args of type enum with only one value (box/box-codegen[#465](https://github.com/box/box-typescript-sdk-gen/issues/465)) ([#131](https://github.com/box/box-typescript-sdk-gen/issues/131)) ([bf4d58c](https://github.com/box/box-typescript-sdk-gen/commit/bf4d58c4c19c10f0ede27a4e9c4f7b3861bcd6f7))
* Change `asUser` and `asEnterprise` method names (box/box-codegen[#464](https://github.com/box/box-typescript-sdk-gen/issues/464)) ([#125](https://github.com/box/box-typescript-sdk-gen/issues/125)) ([22c1907](https://github.com/box/box-typescript-sdk-gen/commit/22c19071723430498baa6aa5c5846b0249f061ca))
* **transformers:** determineIsType (box/box-codegen[#148](https://github.com/box/box-typescript-sdk-gen/issues/148)) ([#129](https://github.com/box/box-typescript-sdk-gen/issues/129)) ([57ccdac](https://github.com/box/box-typescript-sdk-gen/commit/57ccdaca74f68b7e221a43bce967e983ef4b0fcf))

### [0.5.2](https://github.com/box/box-typescript-sdk-gen/compare/v0.5.1...v0.5.2) (2024-03-26)


### New Features and Enhancements

* Support `additionalProperties` of type any in Python and TS (box/box-codegen[#453](https://github.com/box/box-typescript-sdk-gen/issues/453)) ([#97](https://github.com/box/box-typescript-sdk-gen/issues/97)) ([d159548](https://github.com/box/box-typescript-sdk-gen/commit/d159548d38b74fbb410ab1cadb16033948efa14b))
* Support custom Agent in Typescript (box/box-codegen[#452](https://github.com/box/box-typescript-sdk-gen/issues/452)) ([#117](https://github.com/box/box-typescript-sdk-gen/issues/117)) ([de06c26](https://github.com/box/box-typescript-sdk-gen/commit/de06c2672f3efb20e1b685e1c5abf92dff659da3))
* use getDiscriminatorsForUnion in generic serialization (box/box-codegen[#448](https://github.com/box/box-typescript-sdk-gen/issues/448)) ([#95](https://github.com/box/box-typescript-sdk-gen/issues/95)) ([06680c0](https://github.com/box/box-typescript-sdk-gen/commit/06680c05a6c7eb2ff2c20886c642901ac618cd83))

### [0.5.1](https://github.com/box/box-typescript-sdk-gen/compare/v0.5.0...v0.5.1) (2024-03-11)


### New Features and Enhancements

* Replace jsonwebtoken with jose (box/box-codegen[#444](https://github.com/box/box-typescript-sdk-gen/issues/444)) ([#85](https://github.com/box/box-typescript-sdk-gen/issues/85)) ([2ae8658](https://github.com/box/box-typescript-sdk-gen/commit/2ae86589d85764d485383cc0bc1474b611cc4dc2))
