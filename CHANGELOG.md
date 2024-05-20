# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
