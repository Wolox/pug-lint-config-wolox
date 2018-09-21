'use strict';

module.exports = {
  "disallowAttributeConcatenation": true,
  "disallowAttributeInterpolation": true,
  "disallowAttributeTemplateString": "all",
  "disallowBlockExpansion": true,
  "disallowClassAttributeWithStaticValue": true,
  "disallowClassLiteralsBeforeAttributes": null,
  "disallowClassLiteralsBeforeIdLiterals": true,
  "disallowClassLiterals": null,
  "disallowDuplicateAttributes": true,
  "disallowHtmlText": true,
  "disallowIdAttributeWithStaticValue": true,
  "disallowIdLiteralsBeforeAttributes": null,
  "disallowIdLiterals": null,
  "disallowLegacyMixinCall": true,
  "disallowMultipleLineBreaks": true,
  "disallowSpaceAfterCodeOperator": null,
  "disallowSpacesInsideAttributeBrackets": true,
  "disallowSpecificAttributes": null,
  "disallowSpecificTags": ["br", "b", "i"],
  "disallowStringConcatenation": true,
  "disallowStringInterpolation": true,
  "disallowTagInterpolation": true,
  "disallowTemplateString": "all",
  "disallowTrailingSpaces": true,
  "maximumLineLength": 110,
  "maximumNumberOfLines": null,
  "requireClassLiteralsBeforeAttributes": true,
  "requireClassLiteralsBeforeIdLiterals": null,
  "requireIdLiteralsBeforeAttributes": true,
  "requireLineFeedAtFileEnd": true,
  "requireLowerCaseAttributes": true,
  "requireLowerCaseTags": true,
  "requireSpaceAfterCodeOperator": true,
  "requireSpacesInsideAttributeBrackets": null,
  "requireSpecificAttributes": [{
    "img": ["src", "alt"],
    "label": ["for"]
  }],
  "requireStrictEqualityOperators": true,
  "validateAttributeQuoteMarks": "'",
  "validateAttributeSeparator": { "separator": " ", "multiLineSeparator": "\n  " },
  "validateDivTags": true,
  "validateExtensions": true,
  "validateIndentation": 2,
  "validateLineBreaks": "LF",
  "validateSelfClosingTags": true,
  "validateTemplateString": true
}
