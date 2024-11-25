---
title: Lsky Pro+
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.23"

---

# Lsky Pro+

Base URLs:

* <a href="http://127.0.0.1:8000/api/v2">开发环境: http://127.0.0.1:8000/api/v2</a>

# Authentication

# Default

## GET 初始化配置

GET /configs

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "app": {
      "name": "123123",
      "debug": true,
      "url": "http://127.0.0.1:8000",
      "icp_no": "",
      "enable_registration": true,
      "guest_upload": true,
      "user_email_verify": true,
      "user_phone_verify": false,
      "timestamp": 1731229088,
      "is_logged_in": true,
      "photo_count": 13,
      "photo_size": "4871.18",
      "countries": [
        {
          "id": "us",
          "name": "United States",
          "code": 1
        },
        {
          "id": "ag",
          "name": "Antigua & Barbuda",
          "code": 1
        },
        {
          "id": "ai",
          "name": "Anguilla",
          "code": 1
        },
        {
          "id": "as",
          "name": "American Samoa",
          "code": 1
        },
        {
          "id": "bb",
          "name": "Barbados",
          "code": 1
        },
        {
          "id": "bm",
          "name": "Bermuda",
          "code": 1
        },
        {
          "id": "bs",
          "name": "Bahamas",
          "code": 1
        },
        {
          "id": "ca",
          "name": "Canada",
          "code": 1
        },
        {
          "id": "dm",
          "name": "Dominica",
          "code": 1
        },
        {
          "id": "do",
          "name": "Dominican Republic",
          "code": 1
        },
        {
          "id": "gd",
          "name": "Grenada",
          "code": 1
        },
        {
          "id": "gu",
          "name": "Guam",
          "code": 1
        },
        {
          "id": "jm",
          "name": "Jamaica",
          "code": 1
        },
        {
          "id": "kn",
          "name": "St. Kitts & Nevis",
          "code": 1
        },
        {
          "id": "ky",
          "name": "Cayman Islands",
          "code": 1
        },
        {
          "id": "lc",
          "name": "St. Lucia",
          "code": 1
        },
        {
          "id": "mp",
          "name": "Northern Mariana Islands",
          "code": 1
        },
        {
          "id": "ms",
          "name": "Montserrat",
          "code": 1
        },
        {
          "id": "pr",
          "name": "Puerto Rico",
          "code": 1
        },
        {
          "id": "sx",
          "name": "Sint Maarten",
          "code": 1
        },
        {
          "id": "tc",
          "name": "Turks & Caicos Islands",
          "code": 1
        },
        {
          "id": "tt",
          "name": "Trinidad & Tobago",
          "code": 1
        },
        {
          "id": "vc",
          "name": "St. Vincent & Grenadines",
          "code": 1
        },
        {
          "id": "vg",
          "name": "British Virgin Islands",
          "code": 1
        },
        {
          "id": "vi",
          "name": "U.S. Virgin Islands",
          "code": 1
        },
        {
          "id": "ru",
          "name": "Russia",
          "code": 7
        },
        {
          "id": "kz",
          "name": "Kazakhstan",
          "code": 7
        },
        {
          "id": "eg",
          "name": "Egypt",
          "code": 20
        },
        {
          "id": "za",
          "name": "South Africa",
          "code": 27
        },
        {
          "id": "gr",
          "name": "Greece",
          "code": 30
        },
        {
          "id": "nl",
          "name": "Netherlands",
          "code": 31
        },
        {
          "id": "be",
          "name": "Belgium",
          "code": 32
        },
        {
          "id": "fr",
          "name": "France",
          "code": 33
        },
        {
          "id": "es",
          "name": "Spain",
          "code": 34
        },
        {
          "id": "hu",
          "name": "Hungary",
          "code": 36
        },
        {
          "id": "it",
          "name": "Italy",
          "code": 39
        },
        {
          "id": "va",
          "name": "Vatican City",
          "code": 39
        },
        {
          "id": "ro",
          "name": "Romania",
          "code": 40
        },
        {
          "id": "ch",
          "name": "Switzerland",
          "code": 41
        },
        {
          "id": "at",
          "name": "Austria",
          "code": 43
        },
        {
          "id": "gb",
          "name": "United Kingdom",
          "code": 44
        },
        {
          "id": "gg",
          "name": "Guernsey",
          "code": 44
        },
        {
          "id": "im",
          "name": "Isle of Man",
          "code": 44
        },
        {
          "id": "je",
          "name": "Jersey",
          "code": 44
        },
        {
          "id": "dk",
          "name": "Denmark",
          "code": 45
        },
        {
          "id": "se",
          "name": "Sweden",
          "code": 46
        },
        {
          "id": "no",
          "name": "Norway",
          "code": 47
        },
        {
          "id": "sj",
          "name": "Svalbard & Jan Mayen",
          "code": 47
        },
        {
          "id": "pl",
          "name": "Poland",
          "code": 48
        },
        {
          "id": "de",
          "name": "Germany",
          "code": 49
        },
        {
          "id": "pe",
          "name": "Peru",
          "code": 51
        },
        {
          "id": "mx",
          "name": "Mexico",
          "code": 52
        },
        {
          "id": "cu",
          "name": "Cuba",
          "code": 53
        },
        {
          "id": "ar",
          "name": "Argentina",
          "code": 54
        },
        {
          "id": "br",
          "name": "Brazil",
          "code": 55
        },
        {
          "id": "cl",
          "name": "Chile",
          "code": 56
        },
        {
          "id": "co",
          "name": "Colombia",
          "code": 57
        },
        {
          "id": "ve",
          "name": "Venezuela",
          "code": 58
        },
        {
          "id": "my",
          "name": "Malaysia",
          "code": 60
        },
        {
          "id": "au",
          "name": "Australia",
          "code": 61
        },
        {
          "id": "cc",
          "name": "Cocos (Keeling) Islands",
          "code": 61
        },
        {
          "id": "cx",
          "name": "Christmas Island",
          "code": 61
        },
        {
          "id": "id",
          "name": "Indonesia",
          "code": 62
        },
        {
          "id": "ph",
          "name": "Philippines",
          "code": 63
        },
        {
          "id": "nz",
          "name": "New Zealand",
          "code": 64
        },
        {
          "id": "sg",
          "name": "Singapore",
          "code": 65
        },
        {
          "id": "th",
          "name": "Thailand",
          "code": 66
        },
        {
          "id": "jp",
          "name": "Japan",
          "code": 81
        },
        {
          "id": "kr",
          "name": "South Korea",
          "code": 82
        },
        {
          "id": "vn",
          "name": "Vietnam",
          "code": 84
        },
        {
          "id": "cn",
          "name": "China",
          "code": 86
        },
        {
          "id": "tr",
          "name": "Türkiye",
          "code": 90
        },
        {
          "id": "in",
          "name": "India",
          "code": 91
        },
        {
          "id": "pk",
          "name": "Pakistan",
          "code": 92
        },
        {
          "id": "af",
          "name": "Afghanistan",
          "code": 93
        },
        {
          "id": "lk",
          "name": "Sri Lanka",
          "code": 94
        },
        {
          "id": "mm",
          "name": "Myanmar (Burma)",
          "code": 95
        },
        {
          "id": "ir",
          "name": "Iran",
          "code": 98
        },
        {
          "id": "ss",
          "name": "South Sudan",
          "code": 211
        },
        {
          "id": "ma",
          "name": "Morocco",
          "code": 212
        },
        {
          "id": "eh",
          "name": "Western Sahara",
          "code": 212
        },
        {
          "id": "dz",
          "name": "Algeria",
          "code": 213
        },
        {
          "id": "tn",
          "name": "Tunisia",
          "code": 216
        },
        {
          "id": "ly",
          "name": "Libya",
          "code": 218
        },
        {
          "id": "gm",
          "name": "Gambia",
          "code": 220
        },
        {
          "id": "sn",
          "name": "Senegal",
          "code": 221
        },
        {
          "id": "mr",
          "name": "Mauritania",
          "code": 222
        },
        {
          "id": "ml",
          "name": "Mali",
          "code": 223
        },
        {
          "id": "gn",
          "name": "Guinea",
          "code": 224
        },
        {
          "id": "ci",
          "name": "Côte d’Ivoire",
          "code": 225
        },
        {
          "id": "bf",
          "name": "Burkina Faso",
          "code": 226
        },
        {
          "id": "ne",
          "name": "Niger",
          "code": 227
        },
        {
          "id": "tg",
          "name": "Togo",
          "code": 228
        },
        {
          "id": "bj",
          "name": "Benin",
          "code": 229
        },
        {
          "id": "mu",
          "name": "Mauritius",
          "code": 230
        },
        {
          "id": "lr",
          "name": "Liberia",
          "code": 231
        },
        {
          "id": "sl",
          "name": "Sierra Leone",
          "code": 232
        },
        {
          "id": "gh",
          "name": "Ghana",
          "code": 233
        },
        {
          "id": "ng",
          "name": "Nigeria",
          "code": 234
        },
        {
          "id": "td",
          "name": "Chad",
          "code": 235
        },
        {
          "id": "cf",
          "name": "Central African Republic",
          "code": 236
        },
        {
          "id": "cm",
          "name": "Cameroon",
          "code": 237
        },
        {
          "id": "cv",
          "name": "Cape Verde",
          "code": 238
        },
        {
          "id": "st",
          "name": "São Tomé & Príncipe",
          "code": 239
        },
        {
          "id": "gq",
          "name": "Equatorial Guinea",
          "code": 240
        },
        {
          "id": "ga",
          "name": "Gabon",
          "code": 241
        },
        {
          "id": "cg",
          "name": "Congo - Brazzaville",
          "code": 242
        },
        {
          "id": "cd",
          "name": "Congo - Kinshasa",
          "code": 243
        },
        {
          "id": "ao",
          "name": "Angola",
          "code": 244
        },
        {
          "id": "gw",
          "name": "Guinea-Bissau",
          "code": 245
        },
        {
          "id": "io",
          "name": "British Indian Ocean Territory",
          "code": 246
        },
        {
          "id": "ac",
          "name": "Ascension Island",
          "code": 247
        },
        {
          "id": "sc",
          "name": "Seychelles",
          "code": 248
        },
        {
          "id": "sd",
          "name": "Sudan",
          "code": 249
        },
        {
          "id": "rw",
          "name": "Rwanda",
          "code": 250
        },
        {
          "id": "et",
          "name": "Ethiopia",
          "code": 251
        },
        {
          "id": "so",
          "name": "Somalia",
          "code": 252
        },
        {
          "id": "dj",
          "name": "Djibouti",
          "code": 253
        },
        {
          "id": "ke",
          "name": "Kenya",
          "code": 254
        },
        {
          "id": "tz",
          "name": "Tanzania",
          "code": 255
        },
        {
          "id": "ug",
          "name": "Uganda",
          "code": 256
        },
        {
          "id": "bi",
          "name": "Burundi",
          "code": 257
        },
        {
          "id": "mz",
          "name": "Mozambique",
          "code": 258
        },
        {
          "id": "zm",
          "name": "Zambia",
          "code": 260
        },
        {
          "id": "mg",
          "name": "Madagascar",
          "code": 261
        },
        {
          "id": "re",
          "name": "Réunion",
          "code": 262
        },
        {
          "id": "yt",
          "name": "Mayotte",
          "code": 262
        },
        {
          "id": "zw",
          "name": "Zimbabwe",
          "code": 263
        },
        {
          "id": "na",
          "name": "Namibia",
          "code": 264
        },
        {
          "id": "mw",
          "name": "Malawi",
          "code": 265
        },
        {
          "id": "ls",
          "name": "Lesotho",
          "code": 266
        },
        {
          "id": "bw",
          "name": "Botswana",
          "code": 267
        },
        {
          "id": "sz",
          "name": "Eswatini",
          "code": 268
        },
        {
          "id": "km",
          "name": "Comoros",
          "code": 269
        },
        {
          "id": "sh",
          "name": "St. Helena",
          "code": 290
        },
        {
          "id": "ta",
          "name": "Tristan da Cunha",
          "code": 290
        },
        {
          "id": "er",
          "name": "Eritrea",
          "code": 291
        },
        {
          "id": "aw",
          "name": "Aruba",
          "code": 297
        },
        {
          "id": "fo",
          "name": "Faroe Islands",
          "code": 298
        },
        {
          "id": "gl",
          "name": "Greenland",
          "code": 299
        },
        {
          "id": "gi",
          "name": "Gibraltar",
          "code": 350
        },
        {
          "id": "pt",
          "name": "Portugal",
          "code": 351
        },
        {
          "id": "lu",
          "name": "Luxembourg",
          "code": 352
        },
        {
          "id": "ie",
          "name": "Ireland",
          "code": 353
        },
        {
          "id": "is",
          "name": "Iceland",
          "code": 354
        },
        {
          "id": "al",
          "name": "Albania",
          "code": 355
        },
        {
          "id": "mt",
          "name": "Malta",
          "code": 356
        },
        {
          "id": "cy",
          "name": "Cyprus",
          "code": 357
        },
        {
          "id": "fi",
          "name": "Finland",
          "code": 358
        },
        {
          "id": "ax",
          "name": "Åland Islands",
          "code": 358
        },
        {
          "id": "bg",
          "name": "Bulgaria",
          "code": 359
        },
        {
          "id": "lt",
          "name": "Lithuania",
          "code": 370
        },
        {
          "id": "lv",
          "name": "Latvia",
          "code": 371
        },
        {
          "id": "ee",
          "name": "Estonia",
          "code": 372
        },
        {
          "id": "md",
          "name": "Moldova",
          "code": 373
        },
        {
          "id": "am",
          "name": "Armenia",
          "code": 374
        },
        {
          "id": "by",
          "name": "Belarus",
          "code": 375
        },
        {
          "id": "ad",
          "name": "Andorra",
          "code": 376
        },
        {
          "id": "mc",
          "name": "Monaco",
          "code": 377
        },
        {
          "id": "sm",
          "name": "San Marino",
          "code": 378
        },
        {
          "id": "ua",
          "name": "Ukraine",
          "code": 380
        },
        {
          "id": "rs",
          "name": "Serbia",
          "code": 381
        },
        {
          "id": "me",
          "name": "Montenegro",
          "code": 382
        },
        {
          "id": "xk",
          "name": "Kosovo",
          "code": 383
        },
        {
          "id": "hr",
          "name": "Croatia",
          "code": 385
        },
        {
          "id": "si",
          "name": "Slovenia",
          "code": 386
        },
        {
          "id": "ba",
          "name": "Bosnia & Herzegovina",
          "code": 387
        },
        {
          "id": "mk",
          "name": "North Macedonia",
          "code": 389
        },
        {
          "id": "cz",
          "name": "Czechia",
          "code": 420
        },
        {
          "id": "sk",
          "name": "Slovakia",
          "code": 421
        },
        {
          "id": "li",
          "name": "Liechtenstein",
          "code": 423
        },
        {
          "id": "fk",
          "name": "Falkland Islands",
          "code": 500
        },
        {
          "id": "bz",
          "name": "Belize",
          "code": 501
        },
        {
          "id": "gt",
          "name": "Guatemala",
          "code": 502
        },
        {
          "id": "sv",
          "name": "El Salvador",
          "code": 503
        },
        {
          "id": "hn",
          "name": "Honduras",
          "code": 504
        },
        {
          "id": "ni",
          "name": "Nicaragua",
          "code": 505
        },
        {
          "id": "cr",
          "name": "Costa Rica",
          "code": 506
        },
        {
          "id": "pa",
          "name": "Panama",
          "code": 507
        },
        {
          "id": "pm",
          "name": "St. Pierre & Miquelon",
          "code": 508
        },
        {
          "id": "ht",
          "name": "Haiti",
          "code": 509
        },
        {
          "id": "gp",
          "name": "Guadeloupe",
          "code": 590
        },
        {
          "id": "bl",
          "name": "St. Barthélemy",
          "code": 590
        },
        {
          "id": "mf",
          "name": "St. Martin",
          "code": 590
        },
        {
          "id": "bo",
          "name": "Bolivia",
          "code": 591
        },
        {
          "id": "gy",
          "name": "Guyana",
          "code": 592
        },
        {
          "id": "ec",
          "name": "Ecuador",
          "code": 593
        },
        {
          "id": "gf",
          "name": "French Guiana",
          "code": 594
        },
        {
          "id": "py",
          "name": "Paraguay",
          "code": 595
        },
        {
          "id": "mq",
          "name": "Martinique",
          "code": 596
        },
        {
          "id": "sr",
          "name": "Suriname",
          "code": 597
        },
        {
          "id": "uy",
          "name": "Uruguay",
          "code": 598
        },
        {
          "id": "cw",
          "name": "Curaçao",
          "code": 599
        },
        {
          "id": "bq",
          "name": "Caribbean Netherlands",
          "code": 599
        },
        {
          "id": "tl",
          "name": "Timor-Leste",
          "code": 670
        },
        {
          "id": "nf",
          "name": "Norfolk Island",
          "code": 672
        },
        {
          "id": "bn",
          "name": "Brunei",
          "code": 673
        },
        {
          "id": "nr",
          "name": "Nauru",
          "code": 674
        },
        {
          "id": "pg",
          "name": "Papua New Guinea",
          "code": 675
        },
        {
          "id": "to",
          "name": "Tonga",
          "code": 676
        },
        {
          "id": "sb",
          "name": "Solomon Islands",
          "code": 677
        },
        {
          "id": "vu",
          "name": "Vanuatu",
          "code": 678
        },
        {
          "id": "fj",
          "name": "Fiji",
          "code": 679
        },
        {
          "id": "pw",
          "name": "Palau",
          "code": 680
        },
        {
          "id": "wf",
          "name": "Wallis & Futuna",
          "code": 681
        },
        {
          "id": "ck",
          "name": "Cook Islands",
          "code": 682
        },
        {
          "id": "nu",
          "name": "Niue",
          "code": 683
        },
        {
          "id": "ws",
          "name": "Samoa",
          "code": 685
        },
        {
          "id": "ki",
          "name": "Kiribati",
          "code": 686
        },
        {
          "id": "nc",
          "name": "New Caledonia",
          "code": 687
        },
        {
          "id": "tv",
          "name": "Tuvalu",
          "code": 688
        },
        {
          "id": "pf",
          "name": "French Polynesia",
          "code": 689
        },
        {
          "id": "tk",
          "name": "Tokelau",
          "code": 690
        },
        {
          "id": "fm",
          "name": "Micronesia",
          "code": 691
        },
        {
          "id": "mh",
          "name": "Marshall Islands",
          "code": 692
        },
        {
          "id": "kp",
          "name": "North Korea",
          "code": 850
        },
        {
          "id": "hk",
          "name": "Hong Kong SAR China",
          "code": 852
        },
        {
          "id": "mo",
          "name": "Macao SAR China",
          "code": 853
        },
        {
          "id": "kh",
          "name": "Cambodia",
          "code": 855
        },
        {
          "id": "la",
          "name": "Laos",
          "code": 856
        },
        {
          "id": "bd",
          "name": "Bangladesh",
          "code": 880
        },
        {
          "id": "tw",
          "name": "Taiwan",
          "code": 886
        },
        {
          "id": "mv",
          "name": "Maldives",
          "code": 960
        },
        {
          "id": "lb",
          "name": "Lebanon",
          "code": 961
        },
        {
          "id": "jo",
          "name": "Jordan",
          "code": 962
        },
        {
          "id": "sy",
          "name": "Syria",
          "code": 963
        },
        {
          "id": "iq",
          "name": "Iraq",
          "code": 964
        },
        {
          "id": "kw",
          "name": "Kuwait",
          "code": 965
        },
        {
          "id": "sa",
          "name": "Saudi Arabia",
          "code": 966
        },
        {
          "id": "ye",
          "name": "Yemen",
          "code": 967
        },
        {
          "id": "om",
          "name": "Oman",
          "code": 968
        },
        {
          "id": "ps",
          "name": "Palestinian Territories",
          "code": 970
        },
        {
          "id": "ae",
          "name": "United Arab Emirates",
          "code": 971
        },
        {
          "id": "il",
          "name": "Israel",
          "code": 972
        },
        {
          "id": "bh",
          "name": "Bahrain",
          "code": 973
        },
        {
          "id": "qa",
          "name": "Qatar",
          "code": 974
        },
        {
          "id": "bt",
          "name": "Bhutan",
          "code": 975
        },
        {
          "id": "mn",
          "name": "Mongolia",
          "code": 976
        },
        {
          "id": "np",
          "name": "Nepal",
          "code": 977
        },
        {
          "id": "tj",
          "name": "Tajikistan",
          "code": 992
        },
        {
          "id": "tm",
          "name": "Turkmenistan",
          "code": 993
        },
        {
          "id": "az",
          "name": "Azerbaijan",
          "code": 994
        },
        {
          "id": "ge",
          "name": "Georgia",
          "code": 995
        },
        {
          "id": "kg",
          "name": "Kyrgyzstan",
          "code": 996
        },
        {
          "id": "uz",
          "name": "Uzbekistan",
          "code": 998
        }
      ],
      "socialites": [
        {
          "id": 4,
          "name": "QQ",
          "intro": "",
          "provider": "qq"
        }
      ]
    },
    "site": {
      "title": "Lsky Pro+",
      "subtitle": "",
      "homepage_title": "Lsky Pro+",
      "homepage_description": "Your photo album on the cloud.",
      "notice": "",
      "homepage_background_image_url": "",
      "homepage_background_images": [],
      "auth_page_background_image_url": "",
      "auth_page_background_images": []
    }
  },
  "time": 1731229088
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» app|object|true|none||none|
|»»» name|string|true|none||App 名称|
|»»» debug|boolean|true|none||是否启用debug模式|
|»»» url|string|true|none||应用网址(接口服务地址)|
|»»» icp_no|string|true|none||备案号|
|»»» enable_registration|boolean|true|none||是否开启注册|
|»»» guest_upload|boolean|true|none||是否允许游客上传|
|»»» user_email_verify|boolean|true|none||用户是否需要验证邮箱|
|»»» user_phone_verify|boolean|true|none||用户是否需要验证手机号|
|»»» timestamp|integer|true|none||系统时间戳|
|»»» is_logged_in|boolean|true|none||是否已登录|
|»»» photo_count|integer|true|none||图片数量|
|»»» photo_size|number|true|none||图片占用储存|
|»»» countries|[object]|true|none||支持的国家|
|»»»» id|string|true|none||none|
|»»»» name|string|true|none||none|
|»»»» code|integer|true|none||none|
|»»» socialites|[object]|true|none||社会化登录|
|»»»» id|integer|true|none||none|
|»»»» name|string|true|none||none|
|»»»» intro|string|true|none||none|
|»»»» provider|string|true|none||none|
|»» site|object|true|none||none|
|»»» title|string|true|none||站点标题|
|»»» subtitle|string|true|none||站点副标题|
|»»» homepage_title|string|true|none||首页标题|
|»»» homepage_description|string|true|none||首页描述|
|»»» notice|string|true|none||全局公告内容(Markdown)|
|»»» homepage_background_image_url|string|true|none||none|
|»»» homepage_background_images|[string]|true|none||首页背景图|
|»»» auth_page_background_image_url|string|true|none||none|
|»»» auth_page_background_images|[string]|true|none||权限认证背景图|
|» time|integer|true|none||none|

## POST 上传图片

POST /upload

> Body 请求参数

```yaml
file: file:///Users/wispx/Downloads/真正的程序员.png
storage_id: 1
album_id: 0
expired_at: ""
"tags[]":
  - 街头摄影
  - 城市建筑
is_public: ""

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |二进制图片文件|
|» storage_id|body|integer| 是 |储存ID|
|» album_id|body|integer| 否 |相册，登录用户有效|
|» expired_at|body|string| 否 |到期时间(yyyy-MM-dd HH:mm:ss)|
|» tags[]|body|[string]| 否 |标签，登录用户有效|
|» is_public|body|boolean| 否 |是否公开图片，默认 false，登录用户有效|

> 返回示例

```json
{
  "status": "success",
  "message": "success",
  "data": {
    "id": 23,
    "name": "落魄程序员在线炒粉",
    "filename": "落魄程序员在线炒粉.gif",
    "pathname": "20240627/6a39702c8347047c6749854a40831de0.gif",
    "mimetype": "image/gif",
    "extension": "gif",
    "md5": "6a39702c8347047c6749854a40831de0",
    "sha1": "570bdc9ae184db710ee74824a15725d5ed3db589",
    "width": 282,
    "height": 282,
    "ip_address": "127.0.0.1",
    "public_url": "http://localhost/20240627/6a39702c8347047c6749854a40831de0.gif"
  },
  "time": 1719468654
}
```

```json
{
  "status": "error",
  "message": "文件 不能为空。 (还有 3 个错误)",
  "data": {
    "errors": {
      "file": [
        "文件 不能为空。"
      ],
      "expired_at": [
        "到期时间 不是一个有效的日期。"
      ],
      "tags": [
        "标签 必须是一个数组。"
      ],
      "is_public": [
        "是否公开 必须为布尔值。"
      ]
    }
  },
  "time": 1718932519
}
```

```json
{
  "status": "error",
  "message": "每分钟内你只能上传1张图片",
  "data": null,
  "time": 1719465674
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|
|429|[Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||图片ID|
|»» name|string|true|none||图片名称(不含拓展名)|
|»» filename|string|true|none||文件名称|
|»» pathname|string|true|none||物理路径|
|»» mimetype|string|true|none||文件类型|
|»» extension|string|true|none||拓展名|
|»» md5|string|true|none||md5值|
|»» sha1|string|true|none||sha1值|
|»» ip_address|string|true|none||上传ip地址|
|»» public_url|string|true|none||图片访问地址|
|»» width|integer|true|none||宽度|
|»» height|integer|true|none||高度|
|» time|integer|true|none||none|

状态码 **422**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» errors|object|true|none||none|
|»»» file|[string]|true|none||none|
|»»» expired_at|[string]|true|none||none|
|»»» tags|[string]|true|none||none|
|»»» is_public|[string]|true|none||none|
|» time|integer|true|none||none|

状态码 **429**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|
|» time|integer|true|none||none|

## GET 当前所在组信息

GET /group

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "group": {
      "id": 1,
      "name": "系统默认组",
      "intro": "这是系统默认角色组",
      "is_default": true,
      "is_guest": true,
      "options": {
        "max_upload_size": 5120,
        "file_expire_seconds": 0,
        "limit_concurrent_upload": 4,
        "limit_per_minute": 20,
        "limit_per_hour": 100,
        "limit_per_day": 300,
        "limit_per_week": 600,
        "limit_per_month": 1000,
        "allow_file_types": [
          "jpg",
          "jpeg",
          "webp",
          "avif",
          "bmp",
          "gif",
          "png",
          "tif",
          "tiff",
          "jp2",
          "j2k",
          "jpf",
          "jpm",
          "jpg2",
          "j2c",
          "jpc",
          "jpx",
          "heic",
          "heif"
        ]
      }
    },
    "storages": [
      {
        "id": 1,
        "name": "本地储存",
        "intro": "这是本地储存驱动",
        "provider": "local"
      }
    ],
    "payments": [
      {
        "id": 4,
        "name": "支付宝",
        "intro": "",
        "provider": "paypal"
      }
    ]
  },
  "time": 1728887274
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» group|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» intro|string|true|none||none|
|»»» is_default|boolean|true|none||none|
|»»» is_guest|boolean|true|none||none|
|»»» options|object|true|none||none|
|»»»» max_upload_size|integer|true|none||none|
|»»»» file_expire_seconds|integer|true|none||none|
|»»»» limit_concurrent_upload|integer|true|none||none|
|»»»» limit_per_minute|integer|true|none||none|
|»»»» limit_per_hour|integer|true|none||none|
|»»»» limit_per_day|integer|true|none||none|
|»»»» limit_per_week|integer|true|none||none|
|»»»» limit_per_month|integer|true|none||none|
|»»»» allow_file_types|[string]|true|none||none|
|»» storages|[object]|true|none||支持的储存信息|
|»»» id|integer|false|none||储存ID|
|»»» name|string|false|none||名称|
|»»» intro|string|false|none||简介|
|»»» provider|string|false|none||储存提供者|
|»» payments|[object]|true|none||支付驱动|
|»»» id|integer|true|none||驱动ID|
|»»» name|string|true|none||名称|
|»»» intro|string|true|none||简介|
|»»» provider|string|true|none||驱动提供者|
|» time|integer|true|none||none|

## POST 提交反馈与建议

POST /feedback

> Body 请求参数

```json
{
  "type": "general",
  "title": "边使往料白公位毛国必观极列。",
  "name": "文超",
  "email": "u.wsfgevkll@yzxce.tc",
  "content": "据持由较面斯由带值根有往研利争。马研各与发交叫思克如层下须认。加口全声用热叫精收打应光基。历原常世儿强例进斯派于联备原活门音。从引说在往打导包验眼直期人由。亲火实记场低极通京界自劳引给济。"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» type|body|string| 是 |类型|
|» title|body|string| 是 |标题|
|» name|body|string| 是 |姓名|
|» email|body|string| 是 |邮箱|
|» content|body|string| 是 |反馈内容|

#### 枚举值

|属性|值|
|---|---|
|» type|general|
|» type|dmca|

> 返回示例

> 201 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 发送短信验证码

POST /sms/send

> Body 请求参数

```json
{
  "event": "bind_phone",
  "phone": "13888888888",
  "country_code": "cn"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» event|body|string| 是 |事件|
|» phone|body|string| 是 |手机号|
|» country_code|body|string| 是 |国家|

#### 枚举值

|属性|值|
|---|---|
|» event|register|
|» event|bind|
|» event|forget_password|

> 返回示例

```json
{
  "status": "error",
  "message": "发送过于频繁，请稍后再试",
  "time": 1721290230
}
```

> 201 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 发送邮件验证码

POST /mail/send

> Body 请求参数

```json
{
  "event": "login",
  "email": "wisp-x@qq.com"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» event|body|string| 是 |事件|
|» email|body|string| 是 |手机号|

#### 枚举值

|属性|值|
|---|---|
|» event|register|
|» event|bind|
|» event|forget_password|

> 返回示例

```json
{
  "status": "error",
  "message": "发送过于频繁，请稍后再试",
  "time": 1721290153
}
```

```json
{
  "status": "success",
  "message": "successful",
  "time": 1721269493
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 安装程序

POST /install

> Body 请求参数

```json
{
  "app_name": "Lsky Pro+",
  "app_url": "http://127.0.0.1",
  "app_serial_no": "test",
  "app_secret": "test",
  "db_connection": "sqlite",
  "db_host": "anim",
  "db_port": "dolor minim",
  "db_database": "reprehenderit ipsum ad mollit",
  "db_username": "贾军",
  "db_password": "officia pariatur irure ad",
  "admin_username": "admin",
  "admin_email": "admin@example.com",
  "admin_password": "123456",
  "admin_password_confirmation": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» app_name|body|string| 是 |应用名称|
|» app_url|body|string| 是 |应用url|
|» app_serial_no|body|string| 是 |许可证编号|
|» app_secret|body|string| 是 |许可证密钥|
|» db_connection|body|string| 是 |数据库驱动|
|» db_host|body|string| 否 |数据库连接地址|
|» db_port|body|string| 否 |数据库连接端口|
|» db_database|body|string| 否 |数据库名称|
|» db_username|body|string| 否 |数据库用户名|
|» db_password|body|string| 否 |数据库密码|
|» admin_username|body|string| 是 |管理员用户名|
|» admin_email|body|string| 是 |管理员邮箱|
|» admin_password|body|string| 是 |管理员密码|
|» admin_password_confirmation|body|string| 是 |确认密码|

#### 枚举值

|属性|值|
|---|---|
|» db_connection|sqlite|
|» db_connection|mysql|
|» db_connection|mariadb|
|» db_connection|pgsql|
|» db_connection|sqlsrv|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "content": "\n ┌────────────────────┬──────────────────────────┬──────────┐\n │\u001b[2m 名称               \u001b[22m│\u001b[2m 说明                     \u001b[22m│\u001b[2m 检测状态 \u001b[22m│\n ├────────────────────┼──────────────────────────┼──────────┤\n │ PHP >= 8.2         │ PHP 版本必须大于等于 8.2 │ √        │\n │ Ctype PHP 扩展     │ 用于字符类型检测         │ √        │\n │ cURL PHP 扩展      │ 用于发送 HTTP 请求       │ √        │\n │ DOM PHP 扩展       │ 用于操作 XML 文档        │ √        │\n │ Fileinfo PHP 扩展  │ 用于检测文件的 MIME 类型 │ √        │\n │ Filter PHP 扩展    │ 用于数据过滤             │ √        │\n │ Hash PHP 扩展      │ 用于数据散列             │ √        │\n │ Mbstring PHP 扩展  │ 用于多字节字符串处理     │ √        │\n │ OpenSSL PHP 扩展   │ 用于数据加密             │ √        │\n │ PCRE PHP 扩展      │ 用于正则表达式处理       │ √        │\n │ PDO PHP 扩展       │ 用于数据库访问           │ √        │\n │ Session PHP 扩展   │ 用于会话管理             │ √        │\n │ Tokenizer PHP 扩展 │ 用于 PHP 代码的标记化    │ √        │\n │ XML PHP 扩展       │ 用于解析 XML             │ √        │\n │ PCNTL PHP 拓展     │ 用于处理信号和异步任务   │ √        │\n │ Posix PHP 拓展     │ 用于处理进程             │ √        │\n └────────────────────┴──────────────────────────┴──────────┘\n\n\n   INFO  Preparing database.  \n\n  Creating migration table ....................................... 1.26ms DONE\n\n   INFO  Running migrations.  \n\n  0001_01_01_000000_create_users_table ........................... 5.32ms DONE\n  0001_01_01_000001_create_cache_table ........................... 1.26ms DONE\n  0001_01_01_000002_create_jobs_table ............................ 2.62ms DONE\n  0001_01_01_000003_create_personal_access_tokens_table .......... 1.79ms DONE\n  2024_04_24_151850_create_configs_table ......................... 1.58ms DONE\n  2024_04_24_161046_create_groups_table .......................... 0.75ms DONE\n  2024_04_24_170718_create_drivers_table ......................... 0.62ms DONE\n  2024_04_24_172050_create_group_driver_table .................... 0.73ms DONE\n  2024_04_24_172200_create_albums_table .......................... 0.64ms DONE\n  2024_04_24_172219_create_photos_table .......................... 1.98ms DONE\n  2024_04_24_172220_create_album_photo_table ..................... 0.73ms DONE\n  2024_04_24_172221_create_tags_table ............................ 0.61ms DONE\n  2024_04_24_172222_create_taggables_table ....................... 1.15ms DONE\n  2024_04_24_172223_create_shares_table .......................... 1.02ms DONE\n  2024_04_24_172230_create_shareables_table ...................... 1.07ms DONE\n  2024_04_24_172337_create_violations_table ...................... 0.76ms DONE\n  2024_04_24_172555_create_notices_table ......................... 0.54ms DONE\n  2024_04_24_172714_create_pages_table ........................... 0.59ms DONE\n  2024_04_24_172745_create_feedbacks_table ....................... 0.51ms DONE\n  2024_04_24_172823_create_tickets_table ......................... 1.04ms DONE\n  2024_04_24_172919_create_ticket_replies_table .................. 0.67ms DONE\n  2024_04_24_173007_create_reports_table ......................... 0.82ms DONE\n  2024_04_24_205207_create_likes_table ........................... 0.72ms DONE\n  2024_04_24_222637_create_orders_table .......................... 1.32ms DONE\n  2024_04_24_222829_create_user_groups_table ..................... 0.62ms DONE\n  2024_04_24_223536_create_user_capacities_table ................. 0.68ms DONE\n  2024_04_24_225049_create_plans_table ........................... 0.61ms DONE\n  2024_04_24_225050_create_plan_prices_table ..................... 0.57ms DONE\n  2024_04_24_225060_create_plan_groups_table ..................... 0.51ms DONE\n  2024_04_24_225300_create_plan_capacities_table ................. 0.51ms DONE\n  2024_04_24_225418_create_coupons_table ......................... 1.29ms DONE\n\n\n   INFO  Application key set successfully.  \n\n\u001b[32m        __         __           ___               __ \u001b[39m\n\u001b[32m       / /   ___  / /__ __ __  / _ \\ ____ ___  __/ /_\u001b[39m\n\u001b[32m      / /__ (_-< /  '_// // / / ___// __// _ \\/_  __/\u001b[39m\n\u001b[32m     /____//___//_/\\_\\ \\_, / /_/   /_/   \\___/ /_/   \u001b[39m\n\u001b[32m                      /___/                          \u001b[39m\n\n     欢迎使用 Lsky Pro+ 2.0.0，程序已安装成功，如果需要重新安装请删除程序根目录 installed.lock 文件。\n     使用过程中遇到问题请访问 https://docs.lsky.pro 获取帮助。\n\n"
  },
  "time": 1721804693
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» content|string|true|none||none|
|» time|integer|true|none||none|

## GET 许可 / 免责声明

GET /license

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "content": "string"
  },
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» content|string|true|none||none|
|» time|integer|true|none||none|

## GET 更新日志

GET /changelog

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "content": "## v1.7.1 - 2024-04-10\n\n- 新增 重置用户角色组脚本\n- 优化 支持修改没有在有效期内订阅的用户的角色组\n\nFAQ：\n此版本新增了一个重置用户角色组脚本，主要用于修复上一个版本破坏式更新导致的遗留问题，新安装的程序不受影响。具体体现如下：\n- 购买了订阅的用户，赠送容量被收回的问题。\n- 购买了订阅的角色组被重置为原始默认组。\n解决方法：\n1. 备份一下数据库\n2. 进入程序根目录执行：php artisan lsky:reset-subscribe-group\n\n***无任何输出则表示执行成功，执行后会重置用户的角色组为第一个订阅的角色组，此命令只能执行一次，否则会重复发放赠送容量***\n\n## v1.7 - 2024-04-08\n\n- 新增 图片管理手机端支持复制图片链接\n- 新增 后台支持修改用户邮箱\n- 新增 计划任务 30 分钟后自动取消订单\n- 新增 后台控制台显示订单数量和金额\n- 新增 管理员支持删除用户取消的订单\n- 优化 重构套餐购买逻辑\n  - 购买同一个订阅支持续费\n  - 续费订阅不会增加赠送容量，只会修改角色组\n  - 订阅到期后会按顺序重置角色组和扣除容量，没有订阅则会被重置为系统默认组\n- 修复 违规记录列表的违规次数显示不正确的 bug\n- 修复 套餐设置简介为空不生效的 bug\n- 修复 工单详情的工单等级不显示的 bug\n- 修复 粘贴图片无法触发直接上传的 bug\n- 修复 使用 cdn 后上传的图片无法获取真实 ip 的 bug\n- 修复 订单重复支付会失败的 bug\n- 修复 细节样式问题\n\n## v1.6.1 - 2023-12-29\n\n- 修复 阿里云图片内容安全无法使用的 bug\n\n## v1.6 - 2023-12-29\n\n- 新增 记录用户、游客上传图片违规记录\n- 新增 Dark mode(beta)\n- 新增 支持修改系统货币符号\n- 新增 支持阿里云内容审核增强版\n- 新增 支持自定义系统缩略图质量\n- 优化 取消订单后返还优惠券\n- 优化 缓存多吉云凭证信息\n- 优化 删除、修改相册时同时删除封面和背景图片\n- 优化 重构图片内容审核逻辑\n- 优化 AWS S3 策略支持在文件上设置公开 ACL\n- 优化 支付二维码通过本地生成\n- 修复 订单管理批量取消出错的 bug\n- 修复 Windows 系统图片管理页面拖拽图片会触发上传的 bug\n\n## v1.5.1 - 2023-10-04\n\n- 新增 多吉云储存策略\n- 修复 图片管理中使用高级搜索(IP)出错的 bug\n\n#### FAQ\n- 1.5 版本以后需要 PHP >= 8.1，更新前请注意 PHP 版本号以及环境配置是否符合要求，以及注意重新启用队列。\n\n## v1.5 - 2023-10-02 \n\n- 新增 程序使用免责声明\n- 新增 注册邮箱黑/白名单功能\n- 新增 支持 ModerateContent 鉴黄功能\n- 新增 分页优化开关(游标分页)\n- 优化 易支付更名为 Epay\n- 优化 易支付兼容码支付\n- 优化 登录与注册页面样式\n- 优化 更新页面记录更新日志\n- 优化 网站标题展示方式\n- 修复 订单金额为零时无法支付的 bug\n- 修复 后台修改用户名称字符限制错误的 bug\n- 修复 图片和相册管理排序时出现筛选错误的 bug\n\n#### FAQ\n- 易支付功能出现破坏性变更，如果已使用易支付功能，请在更新后重新更改支付接口地址。\n- 此版本最低要求 PHP >= 8.1\n\n## v1.4 - 2023-07-15\n\n- 新增 重新上传图片功能\n- 新增 支持易支付\n- 改进 登录页面\n- 改进 首页横幅描述支持 html\n- 改进 同一个优惠码一个用户仅能使用一次\n- 改进 s3 储存策略支持切换路径模式\n- 修复 工单状态显示不正确的 bug\n- 修复 优惠券折扣可以设置为 0 的 bug\n- 修复 优惠券折扣显示不正确的 bug\n\n## v1.3.3 - 2023-03-26\n\n- 新增 上传接口支持使用临时 Token 功能\n- 新增 辅助功能\n- 改进 角色组支持固定上传时设置的到期时间\n- 改进 图片管理 PC 端支持批量复制图片链接\n- 改进 用户列表显示验证时间\n- 改进 WebDav 支持多种验证方式\n- 修复 微信支付无法调起的 bug\n- 修复 使用优惠券百分比抵扣折扣率显示错误的 bug\n- 修复 format_size 函数格式化时会发生崩溃的 bug\n- 修复 自定义页面无法被隐藏的 bug\n- 修复 手机端侧边栏无法看到底部剩余容量的 bug\n- 修复 模态框和其他弹窗样式冲突的 bug\n- 修复 手机端设置页面下拉选与侧边栏样式冲突的 bug\n\n## v1.3.2 - 2022-12-21\n\n- 新增 支持任意页面拖拽图片上传功能\n- 改进 图片管理支持使用键盘左右键翻页\n- 改进 默认允许所有代理请求\n- 改进 经典上传页面按钮样式\n- 改进 图片广场显示样式\n- 改进 接口请求频率限制\n- 修复 页面管理数据无法保存的 bug\n- 修复使用 sqlite 数据库无法安装程序的 bug\n- 修复 访问时执行了多余 sql 导致卡顿的 bug\n\n 更新完成后若出现「全局拖拽上传」功能控制开关无法切换的情况，请执行命令 `php artisan db:seed`\n\n## v1.3.1 - 2022-11-03\n\n- 修复 覆盖模式水印无效的 bug\n- 修复 页面管理保存后内容丢失的 bug\n- 修复 底部自定义内容不支持 html 的 bug\n- 修复 Paypal 正常模式下无法支付的 bug\n- 修复 广场图片预览高度过低导致错版的 bug\n\n## v1.3 - 2022-10-10\n\n- 新增 Paypal 支付功能\n- 新增 工单系统支持创建、回复后发送邮件通知\n- 新增 支持通过后台添加用户\n- 改进 支持跳过角色组的图片处理功能\n- 改进 上传服务\n- 改进 不在支持游客上传图片时设置图片权限，默认为私有\n- 改进 授权页面显示底部信息\n- 改进 经典上传页面样式\n- 改进 全站公告弹窗不支持点击空白处关闭，防止误触\n- 改进 全站公告弹窗关闭方式\n- 改进 角色组图片处理质量默认为 75%\n- 改进 页面管理、全站公告、底部代码设置取消富文本编辑器\n- 修复 使用优惠券可能出现对应选择的阶梯价格错误的 bug\n- 修复 当文件夹命名规则为用户ID时，游客上传后返回了错误路径的 bug\n- 修复 使用图片处理功能后上传照片会被旋转的 bug\n- 修复 底部无法显示备案号的 bug\n- 修复 站内公告排序值设置无效的 bug\n- 修复 个人主页中的图片、相册列表无法点赞的 bug\n- 修复 总后台统计数据不正确的 bug\n- 修复 广场可以复制删除链接的 bug\n\n## v1.2 - 2022-08-10\n\n- 新增 上传页面支持切换经典上传页面\n- 新增 社会化登录功能(QQ、GitHub)\n- 新增 支持图片软删除功能(使用角色组控制)\n- 新增 支持自定义 blade 模板文件\n- 新增 支持自定义 Gravatar 镜像源\n- 新增 支持使用角色组控制上传图片的格式\n- 新增 支持使用角色组控制上传图片保存的质量\n- 新增 上传后图片支持返回删除链接\n- 改进 更新系统后安全的退出队列进程\n- 改进 支持设置网站副标题\n- 改进 阿里云 Oss 储存策略的连接方式\n- 修复 页面管理中无法创建自定义页面的 bug\n- 修复 删除图片后会导致统计数据错误的 bug\n- 修复 使用原文件名命名规则时可能会返回错误的链接的 bug\n- 修复 图片无法被移出相册的 bug\n- 修复 站内公告内容文本溢出页面的 bug\n- 修复 部分页面文案错误\n\nFAQ：⚠️如果更新后网站无法访问，请尝试在程序根目录执行命令：\n`php artisan migrate --seed && php artisan db:seed --class=CorrectStatSeeder && php artisan optimize:clear`\n\n## v1.1.1 - 2022-07-31\n\n- 优化 异步队列\n- 修复 购买订阅后用户保存数据会导致容量或组被修改的 bug\n- 修复 下单页面阶梯价格点击选择时选中状态异常的 bug\n- 修复 工单回复记录显示不完整的 bug\n\n## v1.1 - 2022-07-29\n\n- 新增 后台增加数据分布统计饼状图\n- 优化 背景图支持自定义图片地址\n- 优化 升级 sftp 储存驱动\n- 修复 储存策略无法保存的 bug\n- 修复 单次优惠码可以重复被使用的 bug\n- 修复 后台无法修改用户的角色组、容量、状态的 bug\n- 修复 开启自动清除预览功能后上传后无法显示链接的 bug\n- 修复 开启原图保护后访问图片出现500的 bug\n- 修复 部分主机 ftp 被动模式下无法连接的问题\n- 修复 支付宝配置默认值错误的 bug\n- 修复 套餐、订单部分位置赠送容量显示不正确的 bug\n- 修复 统计数据不正确的 bug\n- 修复 微信支付配置异常的 bug\n- 修复 未开启任何支付驱动时无法支付订单的 bug\n- 修复 套餐未填写角标内容无法保存的 bug\n- 修复 富文本编辑器弹窗中的按钮颜色显示不正确的 bug\n\n##### 注意，这是一个企业版的第二个公测版本，使用过程中出现问题可以在群内或发送邮件的方式反馈给我们，帮助我们完善它。\n\n## v1.0 - 2022-07-23\n\n- 角色组控制与多策略支持\n- 多用户、相册、接口、图片广场功能\n- 图片审核、水印、原图保护功能\n- 批量上传、粘贴上传、拖拽上传、复制嵌入式代码\n- 接口支持设置权限，可视化管理 Token\n- 分享相册、图片，支持密码分享\n- 用户主页、用户的公开图片和相册\n- 站内公告、收集意见、举报管理、独立页面管理\n- 套餐系统、工单系统、优惠券管理、IP 屏蔽功能\n- 适配支付宝、微信官方支付功能\n- 并发上传优化、百万图片数据量基准优化\n\n#### 注意，这是一个企业版的第一个公测版本，使用过程中出现问题可以在群内或发送邮件的方式反馈给我们，帮助我们完善它。"
  },
  "time": 1721957745
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» content|string|true|none||none|
|» time|integer|true|none||none|

## GET 检测程序是否安装

GET /check-installation

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "installed": true
  },
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» installed|boolean|true|none||是否安装了|
|» time|integer|true|none||none|

## GET 生成二维码

GET /qrcode

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|content|query|string| 是 |二维码内容|
|size|query|integer| 否 |大小|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

# 旧版本接口

## GET 相册列表

GET /api/v1/albums

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|string| 否 |页码|
|q|query|string| 否 |筛选关键字|
|order|query|string| 否 |排序方式，newest=最新，earliest=最早，most=图片最多，least=图片最少|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "status": true,
  "message": "string",
  "data": {
    "current_page": 0,
    "data": [
      {
        "id": 0,
        "name": "string",
        "intro": "string",
        "image_num": 0
      }
    ],
    "first_page_url": "string",
    "from": 0,
    "last_page": 0,
    "last_page_url": "string",
    "links": [
      {
        "url": "string",
        "label": "string",
        "active": true
      }
    ],
    "next_page_url": null,
    "path": "string",
    "per_page": 0,
    "prev_page_url": null,
    "to": 0,
    "total": 0
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|boolean|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|false|none||none|
|»»» name|string|false|none||none|
|»»» intro|string|false|none||none|
|»»» image_num|integer|false|none||none|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|

## DELETE 删除相册

DELETE /api/v1/albums/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## POST 上传图片

POST /api/v1/upload

> Body 请求参数

```yaml
file: file:///Users/company/Downloads/落魄程序员在线炒粉.gif
token: ""
permission: 0
strategy_id: "1"
album_id: ""
expired_at: ""

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |图片|
|» token|body|string| 否 |临时上传 Token|
|» permission|body|integer| 否 |权限，1=公开，0=私有|
|» strategy_id|body|string| 否 |储存策略ID|
|» album_id|body|string| 否 |相册ID|
|» expired_at|body|string| 否 |图片过期时间(yyyy-MM-dd HH:mm:ss)|

> 返回示例

```json
{
  "status": true,
  "message": "上传成功",
  "data": {
    "key": 21,
    "name": "落魄程序员在线炒粉",
    "pathname": "20240719/6a39702c8347047c6749854a40831de0.gif",
    "origin_name": "落魄程序员在线炒粉.gif",
    "size": 465.1474609375,
    "mimetype": "image/gif",
    "extension": "gif",
    "md5": "6a39702c8347047c6749854a40831de0",
    "sha1": "570bdc9ae184db710ee74824a15725d5ed3db589",
    "links": {
      "url": "http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif",
      "html": "&lt;img src=\"http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif\" alt=\"落魄程序员在线炒粉.gif\" title=\"落魄程序员在线炒粉.gif\" /&gt;",
      "bbcode": "[img]http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif[/img]",
      "markdown": "![落魄程序员在线炒粉.gif](http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif)",
      "markdown_with_link": "[![落魄程序员在线炒粉.gif](http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif)](http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif)",
      "thumbnail_url": "http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif",
      "delete_url": ""
    }
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 图片列表

GET /api/v1/images

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|string| 否 |页码|
|q|query|string| 否 |筛选关键字|
|order|query|string| 否 |排序方式，newest=最新，earliest=最早，utmost=最大，least=最小|
|permission|query|string| 否 |权限，public=公开的，private=私有的|
|album_id|query|string| 否 |相册 ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": true,
  "message": "success",
  "data": {
    "current_page": 1,
    "data": [
      {
        "name": "test20.png",
        "pathname": "20240101/test20.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "4eee52ae7f1b5e2f82603c2f841ca71d",
        "sha1": "c895d4780bed0288bf767a58ad024afa331e3942",
        "size": 4194304,
        "width": 0,
        "height": 0,
        "key": 20,
        "human_date": "1周前",
        "date": "2024-07-09 10:32:13",
        "links": {
          "url": "http://localhost/20240101/test20.png",
          "html": "&lt;img src=\"http://localhost/20240101/test20.png\" alt=\"test20.png\" title=\"test20.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test20.png[/img]",
          "markdown": "![test20.png](http://localhost/20240101/test20.png)",
          "markdown_with_link": "[![test20.png](http://localhost/20240101/test20.png)](http://localhost/20240101/test20.png)",
          "thumbnail_url": "http://localhost/20240101/test20.png",
          "delete_url": ""
        }
      },
      {
        "name": "test19.png",
        "pathname": "20240101/test19.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "75eef9c19379f00f95b6c6b6124f2dac",
        "sha1": "75a7d7b7af6ed941e17d1dd20e19595e4ba3058e",
        "size": 7340032,
        "width": 0,
        "height": 0,
        "key": 19,
        "human_date": "1周前",
        "date": "2024-07-09 10:32:23",
        "links": {
          "url": "http://localhost/20240101/test19.png",
          "html": "&lt;img src=\"http://localhost/20240101/test19.png\" alt=\"test19.png\" title=\"test19.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test19.png[/img]",
          "markdown": "![test19.png](http://localhost/20240101/test19.png)",
          "markdown_with_link": "[![test19.png](http://localhost/20240101/test19.png)](http://localhost/20240101/test19.png)",
          "thumbnail_url": "http://localhost/20240101/test19.png",
          "delete_url": ""
        }
      },
      {
        "name": "test18.png",
        "pathname": "20240101/test18.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "ad9f7e31854d1f9bf64344ac52591eb5",
        "sha1": "0ca5e52989f0d6098208f782292a3c25cfbb8f59",
        "size": 6291456,
        "width": 0,
        "height": 0,
        "key": 18,
        "human_date": "1周前",
        "date": "2024-07-09 10:32:33",
        "links": {
          "url": "http://localhost/20240101/test18.png",
          "html": "&lt;img src=\"http://localhost/20240101/test18.png\" alt=\"test18.png\" title=\"test18.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test18.png[/img]",
          "markdown": "![test18.png](http://localhost/20240101/test18.png)",
          "markdown_with_link": "[![test18.png](http://localhost/20240101/test18.png)](http://localhost/20240101/test18.png)",
          "thumbnail_url": "http://localhost/20240101/test18.png",
          "delete_url": ""
        }
      },
      {
        "name": "test17.png",
        "pathname": "20240101/test17.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "0ee7b2bedafadc2fad72cd420f7c2342",
        "sha1": "bb729c672faa20ce421c7f56947c9d3f976570f4",
        "size": 2097152,
        "width": 0,
        "height": 0,
        "key": 17,
        "human_date": "1周前",
        "date": "2024-07-09 10:32:43",
        "links": {
          "url": "http://localhost/20240101/test17.png",
          "html": "&lt;img src=\"http://localhost/20240101/test17.png\" alt=\"test17.png\" title=\"test17.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test17.png[/img]",
          "markdown": "![test17.png](http://localhost/20240101/test17.png)",
          "markdown_with_link": "[![test17.png](http://localhost/20240101/test17.png)](http://localhost/20240101/test17.png)",
          "thumbnail_url": "http://localhost/20240101/test17.png",
          "delete_url": ""
        }
      },
      {
        "name": "test16.png",
        "pathname": "20240101/test16.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "9d1e0ec62da10cb3d42e21310f7a7132",
        "sha1": "669ee8ee8894afb76324871da65f05456aa07bfd",
        "size": 6291456,
        "width": 0,
        "height": 0,
        "key": 16,
        "human_date": "1周前",
        "date": "2024-07-09 10:32:53",
        "links": {
          "url": "http://localhost/20240101/test16.png",
          "html": "&lt;img src=\"http://localhost/20240101/test16.png\" alt=\"test16.png\" title=\"test16.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test16.png[/img]",
          "markdown": "![test16.png](http://localhost/20240101/test16.png)",
          "markdown_with_link": "[![test16.png](http://localhost/20240101/test16.png)](http://localhost/20240101/test16.png)",
          "thumbnail_url": "http://localhost/20240101/test16.png",
          "delete_url": ""
        }
      },
      {
        "name": "test15.png",
        "pathname": "20240101/test15.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "fb117aaa735799fac0f0ada61efcdc4f",
        "sha1": "26acb20aace907064f99f200ce5187f491447839",
        "size": 8388608,
        "width": 0,
        "height": 0,
        "key": 15,
        "human_date": "1周前",
        "date": "2024-07-09 10:33:03",
        "links": {
          "url": "http://localhost/20240101/test15.png",
          "html": "&lt;img src=\"http://localhost/20240101/test15.png\" alt=\"test15.png\" title=\"test15.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test15.png[/img]",
          "markdown": "![test15.png](http://localhost/20240101/test15.png)",
          "markdown_with_link": "[![test15.png](http://localhost/20240101/test15.png)](http://localhost/20240101/test15.png)",
          "thumbnail_url": "http://localhost/20240101/test15.png",
          "delete_url": ""
        }
      },
      {
        "name": "test14.png",
        "pathname": "20240101/test14.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "26d110b53a17cdd388b65c0e7f22213c",
        "sha1": "8541441c8bcf6412be56e3531190d431b1e4dae8",
        "size": 9437184,
        "width": 0,
        "height": 0,
        "key": 14,
        "human_date": "1周前",
        "date": "2024-07-09 10:33:13",
        "links": {
          "url": "http://localhost/20240101/test14.png",
          "html": "&lt;img src=\"http://localhost/20240101/test14.png\" alt=\"test14.png\" title=\"test14.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test14.png[/img]",
          "markdown": "![test14.png](http://localhost/20240101/test14.png)",
          "markdown_with_link": "[![test14.png](http://localhost/20240101/test14.png)](http://localhost/20240101/test14.png)",
          "thumbnail_url": "http://localhost/20240101/test14.png",
          "delete_url": ""
        }
      },
      {
        "name": "test13.png",
        "pathname": "20240101/test13.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "b047f754b9b37004f8542491d339d2e3",
        "sha1": "7c5382d17a592376036fdadc3b875ca6562d37c8",
        "size": 9437184,
        "width": 0,
        "height": 0,
        "key": 13,
        "human_date": "1周前",
        "date": "2024-07-09 10:33:23",
        "links": {
          "url": "http://localhost/20240101/test13.png",
          "html": "&lt;img src=\"http://localhost/20240101/test13.png\" alt=\"test13.png\" title=\"test13.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test13.png[/img]",
          "markdown": "![test13.png](http://localhost/20240101/test13.png)",
          "markdown_with_link": "[![test13.png](http://localhost/20240101/test13.png)](http://localhost/20240101/test13.png)",
          "thumbnail_url": "http://localhost/20240101/test13.png",
          "delete_url": ""
        }
      },
      {
        "name": "test12.png",
        "pathname": "20240101/test12.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "cdd037db4c2c2a4da9ff7356c03ef773",
        "sha1": "efa2209248f756604ad268fffe4c361dba3408a2",
        "size": 4194304,
        "width": 0,
        "height": 0,
        "key": 12,
        "human_date": "1周前",
        "date": "2024-07-09 10:33:33",
        "links": {
          "url": "http://localhost/20240101/test12.png",
          "html": "&lt;img src=\"http://localhost/20240101/test12.png\" alt=\"test12.png\" title=\"test12.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test12.png[/img]",
          "markdown": "![test12.png](http://localhost/20240101/test12.png)",
          "markdown_with_link": "[![test12.png](http://localhost/20240101/test12.png)](http://localhost/20240101/test12.png)",
          "thumbnail_url": "http://localhost/20240101/test12.png",
          "delete_url": ""
        }
      },
      {
        "name": "test11.png",
        "pathname": "20240101/test11.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "b5f6f002b5cfeebfbcf51c6dff03902f",
        "sha1": "06c3663aa9e411dd851fd78cce25deeceaf6af34",
        "size": 9437184,
        "width": 0,
        "height": 0,
        "key": 11,
        "human_date": "1周前",
        "date": "2024-07-09 10:33:43",
        "links": {
          "url": "http://localhost/20240101/test11.png",
          "html": "&lt;img src=\"http://localhost/20240101/test11.png\" alt=\"test11.png\" title=\"test11.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test11.png[/img]",
          "markdown": "![test11.png](http://localhost/20240101/test11.png)",
          "markdown_with_link": "[![test11.png](http://localhost/20240101/test11.png)](http://localhost/20240101/test11.png)",
          "thumbnail_url": "http://localhost/20240101/test11.png",
          "delete_url": ""
        }
      },
      {
        "name": "test10.png",
        "pathname": "20240101/test10.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "758ae0d97dca307b4e65dc4ae4872a64",
        "sha1": "95f7f911d044f9f9fa44d320edf9eca03b8540a9",
        "size": 1048576,
        "width": 0,
        "height": 0,
        "key": 10,
        "human_date": "1周前",
        "date": "2024-07-09 10:33:53",
        "links": {
          "url": "http://localhost/20240101/test10.png",
          "html": "&lt;img src=\"http://localhost/20240101/test10.png\" alt=\"test10.png\" title=\"test10.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test10.png[/img]",
          "markdown": "![test10.png](http://localhost/20240101/test10.png)",
          "markdown_with_link": "[![test10.png](http://localhost/20240101/test10.png)](http://localhost/20240101/test10.png)",
          "thumbnail_url": "http://localhost/20240101/test10.png",
          "delete_url": ""
        }
      },
      {
        "name": "test9.png",
        "pathname": "20240101/test9.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "b87a88255e69ea9dcd020e7cb3e05082",
        "sha1": "32c859fcd50037835b33ed322b14ef22772a7218",
        "size": 2097152,
        "width": 0,
        "height": 0,
        "key": 9,
        "human_date": "1周前",
        "date": "2024-07-09 10:34:03",
        "links": {
          "url": "http://localhost/20240101/test9.png",
          "html": "&lt;img src=\"http://localhost/20240101/test9.png\" alt=\"test9.png\" title=\"test9.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test9.png[/img]",
          "markdown": "![test9.png](http://localhost/20240101/test9.png)",
          "markdown_with_link": "[![test9.png](http://localhost/20240101/test9.png)](http://localhost/20240101/test9.png)",
          "thumbnail_url": "http://localhost/20240101/test9.png",
          "delete_url": ""
        }
      },
      {
        "name": "test8.png",
        "pathname": "20240101/test8.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "b8429a69eb8ec065c8135ffeb9ed337b",
        "sha1": "aca10ab316c1e5c65f41b1556bae082aa92d791c",
        "size": 3145728,
        "width": 0,
        "height": 0,
        "key": 8,
        "human_date": "1周前",
        "date": "2024-07-09 10:34:13",
        "links": {
          "url": "http://localhost/20240101/test8.png",
          "html": "&lt;img src=\"http://localhost/20240101/test8.png\" alt=\"test8.png\" title=\"test8.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test8.png[/img]",
          "markdown": "![test8.png](http://localhost/20240101/test8.png)",
          "markdown_with_link": "[![test8.png](http://localhost/20240101/test8.png)](http://localhost/20240101/test8.png)",
          "thumbnail_url": "http://localhost/20240101/test8.png",
          "delete_url": ""
        }
      },
      {
        "name": "test7.png",
        "pathname": "20240101/test7.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "0a1b4b508d59b3d2fe314662f600c5a9",
        "sha1": "4d92302df8a17a96ee6fdb50068a6f933f40ef1d",
        "size": 4194304,
        "width": 0,
        "height": 0,
        "key": 7,
        "human_date": "1周前",
        "date": "2024-07-09 10:34:23",
        "links": {
          "url": "http://localhost/20240101/test7.png",
          "html": "&lt;img src=\"http://localhost/20240101/test7.png\" alt=\"test7.png\" title=\"test7.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test7.png[/img]",
          "markdown": "![test7.png](http://localhost/20240101/test7.png)",
          "markdown_with_link": "[![test7.png](http://localhost/20240101/test7.png)](http://localhost/20240101/test7.png)",
          "thumbnail_url": "http://localhost/20240101/test7.png",
          "delete_url": ""
        }
      },
      {
        "name": "test6.png",
        "pathname": "20240101/test6.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "8de1060d88fc01e52cd0922b2497f392",
        "sha1": "d128aa69cf9288ffba7cbc34f40ab3d63e9f7239",
        "size": 8388608,
        "width": 0,
        "height": 0,
        "key": 6,
        "human_date": "1周前",
        "date": "2024-07-09 10:34:33",
        "links": {
          "url": "http://localhost/20240101/test6.png",
          "html": "&lt;img src=\"http://localhost/20240101/test6.png\" alt=\"test6.png\" title=\"test6.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test6.png[/img]",
          "markdown": "![test6.png](http://localhost/20240101/test6.png)",
          "markdown_with_link": "[![test6.png](http://localhost/20240101/test6.png)](http://localhost/20240101/test6.png)",
          "thumbnail_url": "http://localhost/20240101/test6.png",
          "delete_url": ""
        }
      },
      {
        "name": "test5.png",
        "pathname": "20240101/test5.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "1037ffa8f32ce6837a4b8b92b7b56054",
        "sha1": "bd3a5d4f3b9f922c8ed45d6ffad74c432763fb85",
        "size": 8388608,
        "width": 0,
        "height": 0,
        "key": 5,
        "human_date": "1周前",
        "date": "2024-07-09 10:34:43",
        "links": {
          "url": "http://localhost/20240101/test5.png",
          "html": "&lt;img src=\"http://localhost/20240101/test5.png\" alt=\"test5.png\" title=\"test5.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test5.png[/img]",
          "markdown": "![test5.png](http://localhost/20240101/test5.png)",
          "markdown_with_link": "[![test5.png](http://localhost/20240101/test5.png)](http://localhost/20240101/test5.png)",
          "thumbnail_url": "http://localhost/20240101/test5.png",
          "delete_url": ""
        }
      },
      {
        "name": "test4.png",
        "pathname": "20240101/test4.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "6fc58f4a2ab2b4c4ec40888d3c438839",
        "sha1": "99b31aca05da965b199a32498f93ab1f8a16ff8e",
        "size": 3145728,
        "width": 0,
        "height": 0,
        "key": 4,
        "human_date": "1周前",
        "date": "2024-07-09 10:34:53",
        "links": {
          "url": "http://localhost/20240101/test4.png",
          "html": "&lt;img src=\"http://localhost/20240101/test4.png\" alt=\"test4.png\" title=\"test4.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test4.png[/img]",
          "markdown": "![test4.png](http://localhost/20240101/test4.png)",
          "markdown_with_link": "[![test4.png](http://localhost/20240101/test4.png)](http://localhost/20240101/test4.png)",
          "thumbnail_url": "http://localhost/20240101/test4.png",
          "delete_url": ""
        }
      },
      {
        "name": "test3.png",
        "pathname": "20240101/test3.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "3c25037ec49d17fa24304d39d04f2c73",
        "sha1": "77a9ac9e3752d190f3fb95026c05a00e9bb43d18",
        "size": 8388608,
        "width": 0,
        "height": 0,
        "key": 3,
        "human_date": "1周前",
        "date": "2024-07-09 10:35:03",
        "links": {
          "url": "http://localhost/20240101/test3.png",
          "html": "&lt;img src=\"http://localhost/20240101/test3.png\" alt=\"test3.png\" title=\"test3.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test3.png[/img]",
          "markdown": "![test3.png](http://localhost/20240101/test3.png)",
          "markdown_with_link": "[![test3.png](http://localhost/20240101/test3.png)](http://localhost/20240101/test3.png)",
          "thumbnail_url": "http://localhost/20240101/test3.png",
          "delete_url": ""
        }
      },
      {
        "name": "test2.png",
        "pathname": "20240101/test2.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "0ec422cc3e96c7daa05b30b9e18dd514",
        "sha1": "76cfbfe4cda9627c79f764bab4449cbeccca5240",
        "size": 4194304,
        "width": 0,
        "height": 0,
        "key": 2,
        "human_date": "1周前",
        "date": "2024-07-09 10:35:13",
        "links": {
          "url": "http://localhost/20240101/test2.png",
          "html": "&lt;img src=\"http://localhost/20240101/test2.png\" alt=\"test2.png\" title=\"test2.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test2.png[/img]",
          "markdown": "![test2.png](http://localhost/20240101/test2.png)",
          "markdown_with_link": "[![test2.png](http://localhost/20240101/test2.png)](http://localhost/20240101/test2.png)",
          "thumbnail_url": "http://localhost/20240101/test2.png",
          "delete_url": ""
        }
      },
      {
        "name": "test.png",
        "pathname": "20240101/test.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "f60751b682c4cdf0106d63aaf97ef9ba",
        "sha1": "36ca39a7dd03e4e719ae2a9541d754fd447118ee",
        "size": 2097152,
        "width": 0,
        "height": 0,
        "key": 1,
        "human_date": "1周前",
        "date": "2024-07-09 10:35:33",
        "links": {
          "url": "http://localhost/20240101/test.png",
          "html": "&lt;img src=\"http://localhost/20240101/test.png\" alt=\"test.png\" title=\"test.png\" /&gt;",
          "bbcode": "[img]http://localhost/20240101/test.png[/img]",
          "markdown": "![test.png](http://localhost/20240101/test.png)",
          "markdown_with_link": "[![test.png](http://localhost/20240101/test.png)](http://localhost/20240101/test.png)",
          "thumbnail_url": "http://localhost/20240101/test.png",
          "delete_url": ""
        }
      },
      {
        "name": "落魄程序员在线炒粉",
        "pathname": "20240719/6a39702c8347047c6749854a40831de0.gif",
        "mimetype": "image/gif",
        "extension": "gif",
        "md5": "6a39702c8347047c6749854a40831de0",
        "sha1": "570bdc9ae184db710ee74824a15725d5ed3db589",
        "size": 465.1474609375,
        "width": 282,
        "height": 282,
        "key": 21,
        "human_date": "1小时前",
        "date": "2024-07-19 14:02:48",
        "links": {
          "url": "http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif",
          "html": "&lt;img src=\"http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif\" alt=\"落魄程序员在线炒粉.gif\" title=\"落魄程序员在线炒粉.gif\" /&gt;",
          "bbcode": "[img]http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif[/img]",
          "markdown": "![落魄程序员在线炒粉.gif](http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif)",
          "markdown_with_link": "[![落魄程序员在线炒粉.gif](http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif)](http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif)",
          "thumbnail_url": "http://localhost/20240719/6a39702c8347047c6749854a40831de0.gif",
          "delete_url": ""
        }
      }
    ],
    "first_page_url": "http://127.0.0.1:8000/api/v1/images?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://127.0.0.1:8000/api/v1/images?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; 上一页",
        "active": false
      },
      {
        "url": "http://127.0.0.1:8000/api/v1/images?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "下一页 &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://127.0.0.1:8000/api/v1/images",
    "per_page": 40,
    "prev_page_url": null,
    "to": 21,
    "total": 21
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|boolean|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» name|string|true|none||none|
|»»» pathname|string|true|none||none|
|»»» mimetype|string|true|none||none|
|»»» extension|string|true|none||none|
|»»» md5|string|true|none||none|
|»»» sha1|string|true|none||none|
|»»» size|integer|true|none||none|
|»»» width|integer|true|none||none|
|»»» height|integer|true|none||none|
|»»» key|integer|true|none||none|
|»»» human_date|string|true|none||none|
|»»» date|string|true|none||none|
|»»» links|object|true|none||none|
|»»»» url|string|true|none||none|
|»»»» html|string|true|none||none|
|»»»» bbcode|string|true|none||none|
|»»»» markdown|string|true|none||none|
|»»»» markdown_with_link|string|true|none||none|
|»»»» thumbnail_url|string|true|none||none|
|»»»» delete_url|string|true|none||none|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|

## DELETE 删除图片

DELETE /api/v1/images/{key}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|key|path|integer| 是 |图片key|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "status": true,
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|boolean|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 生成临时上传token

POST /api/v1/images/tokens

> Body 请求参数

```yaml
num: "1"
seconds: "120"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» num|body|string| 是 |生成数量，最大 100|
|» seconds|body|string| 是 |有效期(秒)，最大 2626560 (一个月)|

> 返回示例

```json
{
  "status": true,
  "message": "生成成功",
  "data": {
    "tokens": [
      {
        "token": "91abd14ec70064b859601b9f436fd92e",
        "expired_at": "2024-07-19 15:17:43"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|boolean|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» tokens|[object]|true|none||none|
|»»» token|string|false|none||none|
|»»» expired_at|string|false|none||none|

## GET 策略列表

GET /api/v1/strategies

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|q|query|string| 否 |筛选关键字|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

## GET 用户资料

GET /api/v1/profile

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": true,
  "message": "success",
  "data": {
    "avatar": "",
    "name": "管理员",
    "username": "admin",
    "email": "admin@qq.com",
    "image_num": 21,
    "album_num": 1,
    "registered_ip": "127.0.0.1",
    "url": "",
    "capacity": 20971520000,
    "size": 112198097.14746094
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|boolean|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» avatar|string|true|none||none|
|»» name|string|true|none||none|
|»» username|string|true|none||none|
|»» email|string|true|none||none|
|»» image_num|integer|true|none||none|
|»» album_num|integer|true|none||none|
|»» registered_ip|string|true|none||none|
|»» url|string|true|none||none|
|»» capacity|integer|true|none||none|
|»» size|number|true|none||none|

# OAuth

## GET 获取授权地址

GET /oauth/{id}/redirect

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |三方授权驱动ID|
|redirect_url|query|string| 否 |授权成功回调地址|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "code": 0,
  "message": "success",
  "data": {
    "redirect_url": "https://github.com/login/oauth/authorize?client_id=6d2d7c8f64c2eb90630a&redirect_uri=http%3A%2F%2F127.0.0.1%3A8000%2Foauth%2Fgithub%2Fcallback%2Flogin&scope=read%3Auser&response_type=code"
  },
  "time": 1718696947
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» redirect_url|string|true|none||授权url|
|» time|integer|true|none||none|

## POST 授权登录

POST /oauth/{id}/login

返回 202 表示需要绑定或注册账号，需要将结构中的token储存，并携带到注册或登录页面，注册，请求注册或登录接口时将token一并发送即可绑定账号。

> Body 请求参数

```json
{
  "code": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |三方登录驱动ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» code|body|string| 是 |三方授权code|

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "name": "string",
    "token": "string"
  },
  "time": 0
}
```

```json
{
  "status": "error",
  "message": "No associated account found. Please register or bind your account.",
  "data": {
    "token": "ba244a85cad11cfacfc12aa17a3ef1a3"
  },
  "time": 1718775854
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» name|string|true|none||用户昵称|
|»» token|string|true|none||Bearer token|
|» time|integer|true|none||none|

状态码 **202**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» token|string|true|none||授权 token，用于注册或登录时绑定账号|
|» time|integer|true|none||none|

## POST 绑定授权账号

POST /oauth/{id}/bind

> Body 请求参数

```json
{
  "code": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |三方授权驱动ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» code|body|string| 是 |三方授权code|

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## GET 已绑定的第三方列表

GET /oauth/binds

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 6,
        "avatar": "https://avatars.githubusercontent.com/u/22728201?v=4",
        "email": "",
        "name": "熊孝兵",
        "nickname": "wisp-x",
        "created_at": "2024-09-05T02:58:49.000000Z",
        "driver": {
          "id": 2,
          "name": "Github",
          "intro": "",
          "provider": "github"
        }
      }
    ],
    "first_page_url": "http://127.0.0.1:8000/api/v2/oauth/binds?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://127.0.0.1:8000/api/v2/oauth/binds?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; 上一页",
        "active": false
      },
      {
        "url": "http://127.0.0.1:8000/api/v2/oauth/binds?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "下一页 &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://127.0.0.1:8000/api/v2/oauth/binds",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  },
  "time": 1725505134
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||ID|
|»»» avatar|string|true|none||头像地址|
|»»» email|string|true|none||邮箱，可能为空|
|»»» name|string|true|none||名称|
|»»» nickname|string|true|none||昵称|
|»»» created_at|string|true|none||绑定时间|
|»»» driver|object|true|none||驱动信息|
|»»»» id|integer|true|none||驱动ID|
|»»»» name|string|true|none||驱动名称|
|»»»» intro|string|true|none||驱动简介|
|»»»» provider|string|true|none||驱动提供者|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|
|» time|integer|true|none||none|

## DELETE 解绑授权账号

DELETE /oauth/{id}/unbind

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |三方授权ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "message": "string",
  "data": null,
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|null|true|none||none|
|» time|integer|true|none||none|

# 授权

## POST 账号和密码登录

POST /login

> Body 请求参数

```json
{
  "login_type": "username",
  "username": "admin",
  "password": "123456",
  "remember": true,
  "token": "02cdc38aea0cd552401c852b2dd8cf39"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» login_type|body|string| 是 |登录类型|
|» username|body|string| 是 |用户名|
|» password|body|string| 是 |密码|
|» remember|body|boolean| 是 |是否记住账号|
|» token|body|string| 是 |授权登录code|
|» country_code|body|string| 是 |国家代码|

#### 枚举值

|属性|值|
|---|---|
|» login_type|username|
|» login_type|email|
|» login_type|phone|

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "name": "string",
    "token": "string"
  },
  "time": 0
}
```

```json
{
  "status": "success",
  "message": "success",
  "data": {
    "name": "管理员",
    "token": "7|6lzw4nslUadVuTEdc3dgMvIw69oEkillOizngdeF4de34ac6"
  },
  "time": 1718761781
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» name|string|true|none||none|
|»» token|string|true|none||none|
|» time|integer|true|none||none|

状态码 **422**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» errors|object|true|none||none|
|»»» username|[string]|true|none||none|
|» time|integer|true|none||none|

## POST 注册账号

POST /register

> Body 请求参数

```json
{
  "email": "o.sfshoxresz@fhrmx.pn",
  "phone": "13888888888",
  "username": "Anna3",
  "name": "龙军",
  "password": "12345678",
  "password_confirmation": "12345678",
  "code": "1234",
  "token": "6d841a8ba980f6d94ea5ac3e415a51bd",
  "country_code": "cn"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» email|body|string| 是 |邮箱，手机号为空时必填|
|» phone|body|string| 是 |手机号，邮箱为空时必填|
|» username|body|string| 是 |用户名，注册后无法更改|
|» name|body|string| 是 |姓名|
|» password|body|string| 是 |密码|
|» password_confirmation|body|string| 是 |确认密码|
|» code|body|string| 是 |验证码|
|» token|body|string| 否 |授权登录code|
|» country_code|body|string| 否 |国家|

> 返回示例

> 201 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

```json
{
  "status": "error",
  "message": "Password 两次输入不一致。",
  "data": {
    "errors": {
      "password": [
        "Password 两次输入不一致。"
      ]
    }
  },
  "time": 1718761636
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

状态码 **422**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» errors|object|true|none||none|
|»»» password|[string]|true|none||none|
|» time|integer|true|none||none|

## POST 退出

POST /logout

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 使用手机号重置密码

POST /sms/reset_password

> Body 请求参数

```json
{
  "phone": "13888888888",
  "country_code": "cn",
  "password": "12345678",
  "password_confirmation": "12345678",
  "code": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» phone|body|string| 是 |手机号|
|» country_code|body|string| 是 |国家代码|
|» password|body|string| 是 |新密码|
|» password_confirmation|body|string| 是 |确认新密码|
|» code|body|string| 是 |短信验证码|

> 返回示例

```json
{
  "status": "error",
  "message": "Phone 不存在。 (还有 1 个错误)",
  "data": {
    "errors": {
      "phone": [
        "Phone 不存在。"
      ],
      "code": [
        "Invalid verification code."
      ]
    }
  },
  "time": 1723626772
}
```

> 422 Response

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "errors": {
      "phone": [
        "string"
      ],
      "code": [
        "string"
      ]
    }
  },
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

状态码 **422**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» errors|object|true|none||none|
|»»» phone|[string]|true|none||none|
|»»» code|[string]|true|none||none|
|» time|integer|true|none||none|

## POST 使用邮箱重置密码

POST /mail/reset_password

> Body 请求参数

```json
{
  "email": "q.kod@qndy.pn",
  "password": "12345678",
  "password_confirmation": "12345678",
  "code": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» email|body|string| 是 |邮箱|
|» password|body|string| 是 |新密码|
|» password_confirmation|body|string| 是 |确认新密码|
|» code|body|string| 是 |短信验证码|

> 返回示例

```json
{
  "status": "error",
  "message": "Email 不存在。 (还有 1 个错误)",
  "data": {
    "errors": {
      "email": [
        "Email 不存在。"
      ],
      "code": [
        "Invalid verification code."
      ]
    }
  },
  "time": 1723626754
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

# 用户

## PUT 修改密码

PUT /user/password

> Body 请求参数

```json
{
  "current_password": "12345678",
  "password": "12345678",
  "password_confirmation": "12345678"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» current_password|body|string| 是 |当前密码|
|» password|body|string| 是 |新密码|
|» password_confirmation|body|string| 是 |确认新密码|

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|none|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

状态码 **401**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

状态码 **422**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» errors|object|true|none||none|
|»»» current_password|[string]|true|none||none|
|» time|integer|true|none||none|

## GET 登录用户信息

GET /user/profile

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 1,
    "avatar_url": "",
    "name": "admin",
    "username": "admin",
    "email": "admin@qq.com",
    "phone": "18155655975",
    "tagline": "",
    "bio": "",
    "url": "",
    "location": "",
    "company": "",
    "company_title": "",
    "interests": [],
    "socials": [],
    "options": {
      "language": "zh_CN"
    },
    "is_admin": true,
    "country_code": "cn",
    "login_ip": "127.0.0.1",
    "email_verified_at": "2024-11-08T20:53:21.000000Z",
    "phone_verified_at": null,
    "created_at": "2024-11-08T20:53:21.000000Z",
    "group_count": 1,
    "capacity_count": 1,
    "order_count": 3,
    "share_count": 5,
    "ticket_count": 0,
    "photo_count": 12,
    "album_count": 1,
    "used_storage": 4117.51,
    "total_storage": 1073741824
  },
  "time": 1731229345
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||用户ID|
|»» avatar_url|string|true|none||头像，可能为空|
|»» name|string|true|none||用户昵称|
|»» username|string|true|none||用户名|
|»» email|string|true|none||邮箱|
|»» phone|string|true|none||none|
|»» tagline|string|true|none||个性签名|
|»» bio|string|true|none||个人简介|
|»» url|string|true|none||个人主页|
|»» location|string|true|none||所在位置|
|»» company|string|true|none||公司|
|»» company_title|string|true|none||公司职称|
|»» interests|[string]|true|none||兴趣标签|
|»» socials|[string]|true|none||社交账号|
|»» options|object|true|none||none|
|»»» language|string|true|none||none|
|»» is_admin|boolean|true|none||是否为管理员|
|»» country_code|string|true|none||none|
|»» login_ip|string|true|none||最后登录ip|
|»» email_verified_at|string|true|none||邮箱验证时间，为null表示未验证|
|»» phone_verified_at|null|true|none||none|
|»» created_at|string|true|none||注册时间|
|»» group_count|integer|true|none||购买角色组数量|
|»» capacity_count|integer|true|none||购买容量数量|
|»» order_count|integer|true|none||订单数量|
|»» share_count|integer|true|none||分享数量|
|»» ticket_count|integer|true|none||工单数量|
|»» photo_count|integer|true|none||图片数量|
|»» album_count|integer|true|none||相册数量|
|»» used_storage|number|true|none||none|
|»» total_storage|integer|true|none||总储存(kb)|
|» time|integer|true|none||none|

## POST 修改登录用户信息

POST /user/profile

> Body 请求参数

```yaml
avatar: file:///Users/wispx/Downloads/7a585313ed855e8d652cbb3154a6056e.jpeg
name: 熊二哈
username: admin
tagline: ""
bio: 这个人真勤快，还写了个性签名！
url: https://github.com/wisp-x
company: ""
company_title: ""
location: 安徽 合肥
"interests[]":
  - 唱、跳、rap
"socials[]": https://github.com/wisp-x

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» avatar|body|string(binary)| 否 |用户头像|
|» name|body|string| 否 |昵称|
|» username|body|string| 否 |用户名|
|» tagline|body|string| 否 |个性签名|
|» bio|body|string| 否 |个人简介|
|» url|body|string| 否 |个人链接|
|» company|body|string| 否 |公司|
|» company_title|body|string| 否 |公司职称|
|» location|body|string| 否 |所在位置|
|» interests[]|body|[string]| 否 |兴趣爱好|
|» socials[]|body|[string]| 否 |社交账号|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": true,
  "time": 1725074378
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||用户ID|
|»» avatar|string|true|none||头像，可能为空|
|»» name|string|true|none||用户昵称|
|»» username|string|true|none||用户名|
|»» email|string|true|none||邮箱|
|»» phone|null|true|none||none|
|»» location|string|true|none||位置|
|»» bio|string|true|none||个人签名|
|»» interests|[string]|true|none||兴趣标签|
|»» socials|[string]|true|none||none|
|»» country_code|null|true|none||none|
|»» login_ip|string|true|none||最后登录ip|
|»» email_verified_at|string|true|none||邮箱验证时间，为null表示未验证|
|»» phone_verified_at|null|true|none||none|
|»» created_at|string|true|none||注册时间|
|»» group_count|integer|true|none||购买角色组数量|
|»» capacity_count|integer|true|none||购买容量数量|
|»» order_count|integer|true|none||订单数量|
|»» share_count|integer|true|none||分享数量|
|»» ticket_count|integer|true|none||工单数量|
|»» photo_count|integer|true|none||图片数量|
|»» album_count|integer|true|none||相册数量|
|»» used_storage|number|true|none||已使用储存(kb)|
|»» total_storage|integer|true|none||总储存(kb)|
|» time|integer|true|none||none|

## POST 绑定/换绑手机号

POST /user/bind_phone

> Body 请求参数

```json
{
  "phone": "13412734275",
  "country_code": "CN",
  "code": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» phone|body|string| 是 |手机号|
|» country_code|body|string| 是 |国家|
|» code|body|string| 是 |短信验证码|

> 返回示例

> 201 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 绑定/换绑邮箱

POST /user/bind_email

> Body 请求参数

```json
{
  "email": "m.ifinwuxgax@vcfcyh.pf",
  "code": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» email|body|string| 是 |邮箱|
|» code|body|string| 是 |邮件验证码|

> 返回示例

> 201 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 保存设置信息

POST /user/setting

> Body 请求参数

```json
{
  "language": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» language|body|string| 否 |系统语言|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1729146612
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

# 用户/相册

## POST 添加相册

POST /user/albums

> Body 请求参数

```json
{
  "name": "具义情族合",
  "intro": "手思水装建事先工院下具同。"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» name|body|string| 否 |相册名称|
|» intro|body|string| 否 |简介|
|» is_public|body|string| 否 |是否公开|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 3
  },
  "time": 1727141883
}
```

> 422 Response

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "errors": {
      "name": [
        "string"
      ]
    }
  },
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||相册ID|
|» time|integer|true|none||none|

状态码 **422**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» errors|object|true|none||none|
|»»» name|[string]|true|none||none|
|» time|integer|true|none||none|

## GET 相册列表

GET /user/albums

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|q|query|string| 否 |筛选关键字|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 3,
        "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
        "intro": "手思水装建事先工院下具同。",
        "is_public": true,
        "created_at": "2024-09-24T01:38:03.000000Z",
        "photo_count": 6,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
          "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg"
        ],
        "tags": []
      },
      {
        "id": 4,
        "name": "新建相册",
        "intro": "这是一个新建相册",
        "is_public": true,
        "created_at": "2024-09-24T01:40:56.000000Z",
        "photo_count": 1,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG"
        ],
        "tags": []
      },
      {
        "id": 5,
        "name": "2222",
        "intro": "123123232232\n31231233312332",
        "is_public": true,
        "created_at": "2024-09-24T01:41:36.000000Z",
        "photo_count": 5,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
          "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg"
        ],
        "tags": []
      },
      {
        "id": 12,
        "name": "",
        "intro": "",
        "is_public": true,
        "created_at": "2024-09-26T07:16:44.000000Z",
        "photo_count": 0,
        "covers": [],
        "tags": []
      },
      {
        "id": 13,
        "name": "新建相册",
        "intro": "",
        "is_public": true,
        "created_at": "2024-09-26T07:17:19.000000Z",
        "photo_count": 0,
        "covers": [],
        "tags": []
      },
      {
        "id": 14,
        "name": "新建相册",
        "intro": "",
        "is_public": true,
        "created_at": "2024-09-26T08:03:33.000000Z",
        "photo_count": 0,
        "covers": [],
        "tags": []
      },
      {
        "id": 15,
        "name": "新建相册",
        "intro": "",
        "is_public": true,
        "created_at": "2024-09-26T08:03:49.000000Z",
        "photo_count": 0,
        "covers": [],
        "tags": []
      },
      {
        "id": 16,
        "name": "新建相册",
        "intro": "",
        "is_public": true,
        "created_at": "2024-09-26T08:04:03.000000Z",
        "photo_count": 0,
        "covers": [],
        "tags": []
      },
      {
        "id": 17,
        "name": "新建相册",
        "intro": "",
        "is_public": true,
        "created_at": "2024-09-27T00:33:05.000000Z",
        "photo_count": 0,
        "covers": [],
        "tags": []
      },
      {
        "id": 18,
        "name": "新建相册",
        "intro": "",
        "is_public": true,
        "created_at": "2024-10-11T02:05:24.000000Z",
        "photo_count": 0,
        "covers": [],
        "tags": []
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/user/albums?page=1",
      "last": "http://127.0.0.1:8000/api/v2/user/albums?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/user/albums?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/user/albums",
      "per_page": 15,
      "to": 10,
      "total": 10
    }
  },
  "time": 1730873044
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||相册ID|
|»»» name|string|true|none||名称|
|»»» intro|string|true|none||简介|
|»»» is_public|boolean|true|none||none|
|»»» created_at|string|true|none||创建时间|
|»»» photo_count|integer|true|none||图片数量|
|»»» covers|[string]|true|none||封面图，最多三张，可能为空|
|»»» tags|[string]|true|none||相册标签|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## GET 相册详情

GET /user/albums/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 1,
    "name": "test2",
    "intro": "11112\n314",
    "is_public": false,
    "created_at": "2024-09-20T07:57:01.000000Z",
    "photo_count": 1,
    "covers": [
      "http://127.0.0.1:8000/uploads/20240905/2afba671098674026525895187e29c16.png"
    ],
    "tags": []
  },
  "time": 1727143278
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||相册ID|
|»» name|string|true|none||名称|
|»» intro|string|true|none||简介|
|»» is_public|boolean|true|none||是否公开|
|»» created_at|string|true|none||创建时间|
|»» photo_count|integer|true|none||图片数量|
|»» covers|[string]|true|none||封面图，最多三张，可能为空|
|»» tags|[string]|true|none||标签|
|» time|integer|true|none||none|

## PUT 修改相册

PUT /user/albums/{id}

> Body 请求参数

```json
{
  "name": "热八响",
  "intro": "作所活照织强构南技务石长眼片很。"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» name|body|string| 否 |相册名称|
|» intro|body|string| 否 |简介|
|» is_public|body|string| 否 |是否公开|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## DELETE 删除相册

DELETE /user/albums/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## POST 添加图片到相册

POST /user/albums/{id}/photos

> Body 请求参数

```json
[
  889,
  166
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|array[integer]| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1727230262
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## DELETE 从相册中移除图片

DELETE /user/albums/{id}/photos

> Body 请求参数

```json
[]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|array[integer]| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## POST 附加标签

POST /user/albums/{id}/tags

> Body 请求参数

```json
[
  "测试1",
  "测试2"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|array[object]| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1720070662
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

## DELETE 移除标签

DELETE /user/albums/{id}/tags

> Body 请求参数

```json
[
  "测试1",
  "测试2"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|array[object]| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

# 用户/图库

## GET 图片列表

GET /user/photos

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|q|query|string| 否 |筛选关键字|
|album_id|query|integer| 否 |相册ID|
|storage_id|query|integer| 否 |储存ID|
|order_by|query|string| 否 |排序方式|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

#### 枚举值

|属性|值|
|---|---|
|order_by|latest|
|order_by|oldest|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 1,
        "name": "真正的程序员",
        "intro": "",
        "filename": "真正的程序员.png",
        "pathname": "20240905/2afba671098674026525895187e29c16.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "2afba671098674026525895187e29c16",
        "sha1": "48bbab6ce0e559ceac4a7578a0bc70c7a81eab0e",
        "width": 571,
        "height": 512,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-09-05T01:59:26.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240905/2afba671098674026525895187e29c16.png",
        "public_url": "http://127.0.0.1:8000/uploads/20240905/2afba671098674026525895187e29c16.png",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [],
        "tags": [
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          },
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          },
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          }
        ]
      },
      {
        "id": 2,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "filename": "7a585313ed855e8d652cbb3154a6056e.jpeg",
        "pathname": "20240918/399fa7ca41917e534c31950ce412b51b.jpeg",
        "mimetype": "image/jpeg",
        "extension": "jpg",
        "md5": "399fa7ca41917e534c31950ce412b51b",
        "sha1": "455a2c8e8324924b7d1e56328e8e9d874d875db2",
        "width": 1000,
        "height": 1000,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-09-18T09:27:51.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240918/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20240918/399fa7ca41917e534c31950ce412b51b.jpeg",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [
          {
            "id": 3,
            "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
            "intro": "手思水装建事先工院下具同。"
          }
        ],
        "tags": []
      },
      {
        "id": 6,
        "name": "a157829fe078dad9bbfd268ff1ec3b01",
        "intro": "",
        "filename": "a157829fe078dad9bbfd268ff1ec3b01.jpeg",
        "pathname": "20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "mimetype": "image/jpeg",
        "extension": "jpg",
        "md5": "f60751b682c4cdf0106d63aaf97ef9ba",
        "sha1": "ace9dfef4a7ee1026cc1e0db6907a68dbb428ba8",
        "width": 1080,
        "height": 1080,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-09-19T06:44:24.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [
          {
            "id": 3,
            "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
            "intro": "手思水装建事先工院下具同。"
          },
          {
            "id": 5,
            "name": "2222",
            "intro": "123123232232\n31231233312332"
          }
        ],
        "tags": []
      },
      {
        "id": 9,
        "name": "真正的程序员",
        "intro": "",
        "filename": "真正的程序员.png",
        "pathname": "20240919/2afba671098674026525895187e29c16.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "2afba671098674026525895187e29c16",
        "sha1": "48bbab6ce0e559ceac4a7578a0bc70c7a81eab0e",
        "width": 571,
        "height": 512,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-09-19T06:44:25.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [
          {
            "id": 3,
            "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
            "intro": "手思水装建事先工院下具同。"
          },
          {
            "id": 5,
            "name": "2222",
            "intro": "123123232232\n31231233312332"
          }
        ],
        "tags": []
      },
      {
        "id": 10,
        "name": "IMG_0439111",
        "intro": "223331111",
        "filename": "IMG_0439.PNG",
        "pathname": "20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "e6bbc1777d6b2458ddeacf76d557b604",
        "sha1": "7da845a312de07e332d0f5d84273e3a93f5ad263",
        "width": 1170,
        "height": 2532,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-09-19T06:44:25.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [
          {
            "id": 3,
            "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
            "intro": "手思水装建事先工院下具同。"
          },
          {
            "id": 4,
            "name": "新建相册",
            "intro": "这是一个新建相册"
          },
          {
            "id": 5,
            "name": "2222",
            "intro": "123123232232\n31231233312332"
          }
        ],
        "tags": [
          {
            "id": 3,
            "name": "123"
          },
          {
            "id": 4,
            "name": "213"
          },
          {
            "id": 5,
            "name": "4123"
          },
          {
            "id": 6,
            "name": "222"
          },
          {
            "id": 7,
            "name": "2222"
          },
          {
            "id": 8,
            "name": "423"
          },
          {
            "id": 9,
            "name": "412"
          },
          {
            "id": 10,
            "name": "4324"
          },
          {
            "id": 11,
            "name": "111111"
          }
        ]
      },
      {
        "id": 12,
        "name": "ChMkJlbKwdSIBXyaABDQ5_X5vbEAALGegFJFcIAEND_912",
        "intro": "",
        "filename": "ChMkJlbKwdSIBXyaABDQ5_X5vbEAALGegFJFcIAEND_912.jpg",
        "pathname": "20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "mimetype": "image/jpeg",
        "extension": "jpg",
        "md5": "5c6ad49c962c3731412fd6d72765e6d5",
        "sha1": "edb99390c4205d87e9c53a0994065bd62f17a253",
        "width": 1920,
        "height": 1200,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-09-19T06:44:25.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [
          {
            "id": 3,
            "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
            "intro": "手思水装建事先工院下具同。"
          },
          {
            "id": 5,
            "name": "2222",
            "intro": "123123232232\n31231233312332"
          }
        ],
        "tags": []
      },
      {
        "id": 13,
        "name": "IMG_1499",
        "intro": "",
        "filename": "IMG_1499.PNG",
        "pathname": "20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "6fc44935eb88b1434a73b0e1ed05bde0",
        "sha1": "829f7b91cd70aab664b8b6f80bcc065894348a7e",
        "width": 1170,
        "height": 2532,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-09-19T06:44:25.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [
          {
            "id": 3,
            "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
            "intro": "手思水装建事先工院下具同。"
          },
          {
            "id": 5,
            "name": "2222",
            "intro": "123123232232\n31231233312332"
          }
        ],
        "tags": []
      },
      {
        "id": 14,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "filename": "7a585313ed855e8d652cbb3154a6056e.jpeg",
        "pathname": "20241016/399fa7ca41917e534c31950ce412b51b.jpeg",
        "mimetype": "image/jpeg",
        "extension": "jpg",
        "md5": "399fa7ca41917e534c31950ce412b51b",
        "sha1": "455a2c8e8324924b7d1e56328e8e9d874d875db2",
        "width": 1000,
        "height": 1000,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-10-16T09:36:18.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241016/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20241016/399fa7ca41917e534c31950ce412b51b.jpeg",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [],
        "tags": []
      },
      {
        "id": 15,
        "name": "5de83214350f1daa2806a1df507d6546",
        "intro": "",
        "filename": "5de83214350f1daa2806a1df507d6546.png",
        "pathname": "20241016/5de83214350f1daa2806a1df507d6546.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "5de83214350f1daa2806a1df507d6546",
        "sha1": "fba51de2b3f00d06ea76c0bd3e6fae611c9ac460",
        "width": 351,
        "height": 656,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-10-16T09:36:31.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241016/5de83214350f1daa2806a1df507d6546.png",
        "public_url": "http://127.0.0.1:8000/uploads/20241016/5de83214350f1daa2806a1df507d6546.png",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [],
        "tags": []
      },
      {
        "id": 16,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "filename": "7a585313ed855e8d652cbb3154a6056e.jpeg",
        "pathname": "20241017/399fa7ca41917e534c31950ce412b51b.jpeg",
        "mimetype": "image/jpeg",
        "extension": "jpg",
        "md5": "399fa7ca41917e534c31950ce412b51b",
        "sha1": "455a2c8e8324924b7d1e56328e8e9d874d875db2",
        "width": 1000,
        "height": 1000,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-10-17T06:21:51.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241017/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20241017/399fa7ca41917e534c31950ce412b51b.jpeg",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [],
        "tags": []
      },
      {
        "id": 17,
        "name": "5de83214350f1daa2806a1df507d6546",
        "intro": "",
        "filename": "5de83214350f1daa2806a1df507d6546.png",
        "pathname": "20241017/5de83214350f1daa2806a1df507d6546.png",
        "mimetype": "image/png",
        "extension": "png",
        "md5": "5de83214350f1daa2806a1df507d6546",
        "sha1": "fba51de2b3f00d06ea76c0bd3e6fae611c9ac460",
        "width": 351,
        "height": 656,
        "is_public": true,
        "ip_address": "127.0.0.1",
        "expired_at": null,
        "created_at": "2024-10-17T07:42:51.000000Z",
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241017/5de83214350f1daa2806a1df507d6546.png",
        "public_url": "http://127.0.0.1:8000/uploads/20241017/5de83214350f1daa2806a1df507d6546.png",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组"
        },
        "storage": {
          "id": 1,
          "name": "本地储存",
          "intro": "这是本地储存驱动",
          "provider": "local"
        },
        "albums": [],
        "tags": []
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/user/photos?page=1",
      "last": "http://127.0.0.1:8000/api/v2/user/photos?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/user/photos?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/user/photos",
      "per_page": 20,
      "to": 11,
      "total": 11
    }
  },
  "time": 1730872842
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||图片ID|
|»»» name|string|true|none||自定义名称|
|»»» intro|string|true|none||简介|
|»»» filename|string|true|none||文件名|
|»»» pathname|string|true|none||文件路径名|
|»»» mimetype|string|true|none||文件类型|
|»»» extension|string|true|none||拓展名|
|»»» md5|string|true|none||md5值|
|»»» sha1|string|true|none||sha1值|
|»»» width|integer|true|none||宽度|
|»»» height|integer|true|none||高度|
|»»» is_public|boolean|true|none||是否公开|
|»»» ip_address|string|true|none||上传ip地址|
|»»» expired_at|null|true|none||到期时间|
|»»» created_at|string|true|none||创建时间|
|»»» thumbnail_url|string|true|none||缩略图地址|
|»»» public_url|string|true|none||原图地址|
|»»» group|object|true|none||所在角色组信息|
|»»»» id|integer|true|none||角色组ID|
|»»»» name|string|true|none||角色组名称|
|»»»» intro|string|true|none||角色组简介|
|»»» storage|object|true|none||所在储存信息|
|»»»» id|integer|true|none||储存ID|
|»»»» name|string|true|none||储存名称|
|»»»» intro|string|true|none||储存简介|
|»»»» provider|string|true|none||储存提供者|
|»»» albums|[object]|true|none||所在相册列表|
|»»»» id|integer|true|none||none|
|»»»» name|string|true|none||none|
|»»»» intro|string|true|none||none|
|»»» tags|[object]|true|none||标签信息|
|»»»» id|integer|true|none||none|
|»»»» name|string|true|none||none|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## DELETE 删除图片

DELETE /user/photos

> Body 请求参数

```json
[
  76,
  90,
  26
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|array[integer]| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## GET 图片详情

GET /user/photos/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |图片ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 23,
    "name": "落魄程序员在线炒粉",
    "intro": "",
    "filename": "落魄程序员在线炒粉.gif",
    "pathname": "20240629/6a39702c8347047c6749854a40831de0.gif",
    "mimetype": "image/gif",
    "extension": "gif",
    "md5": "6a39702c8347047c6749854a40831de0",
    "sha1": "570bdc9ae184db710ee74824a15725d5ed3db589",
    "width": 282,
    "height": 282,
    "is_public": false,
    "ip_address": "127.0.0.1",
    "expired_at": null,
    "created_at": "2024-06-29T10:58:23.000000Z",
    "tags": [
      {
        "id": 5,
        "name": "街头摄影"
      },
      {
        "id": 9,
        "name": "城市建筑"
      }
    ],
    "group": {
      "id": 1,
      "name": "系统默认组",
      "intro": "这是系统默认角色组"
    },
    "storage": {
      "id": 1,
      "name": "本地储存",
      "intro": "这是本地储存驱动",
      "provider": "local"
    },
    "album": {
      "id": 1,
      "name": "街头摄影",
      "intro": "这是测试相册"
    }
  },
  "time": 1719659648
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|[object]|true|none||none|
|»» id|integer|false|none||图片ID|
|»» name|string|false|none||自定义名称|
|»» intro|string|false|none||简介|
|»» filename|string|false|none||文件名|
|»» pathname|string|false|none||文件路径名|
|»» mimetype|string|false|none||文件类型|
|»» extension|string|false|none||拓展名|
|»» md5|string|false|none||md5值|
|»» sha1|string|false|none||sha1值|
|»» width|integer|false|none||宽度|
|»» height|integer|false|none||高度|
|»» is_public|boolean|false|none||是否公开|
|»» ip_address|string|false|none||上传ip地址|
|»» expired_at|null|false|none||到期时间|
|»» created_at|string|false|none||创建时间|
|»» group|object|false|none||所在角色组信息|
|»»» id|integer|true|none||角色组ID|
|»»» name|string|true|none||角色组名称|
|»»» intro|string|true|none||角色组简介|
|»» storage|object|false|none||所在储存信息|
|»»» id|integer|true|none||储存ID|
|»»» name|string|true|none||储存名称|
|»»» intro|string|true|none||储存简介|
|»»» provider|string|true|none||储存提供者|
|»» album|object|false|none||所在相册信息|
|»»» id|integer|true|none||相册ID|
|»»» name|string|true|none||相册名称|
|»»» intro|string|true|none||相册简介|
|»» tags|[object]|false|none||标签信息|
|»»» id|integer|true|none||标签ID|
|»»» name|string|true|none||标签名称|
|» time|integer|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|provider|local|
|provider|s3|
|provider|oss|
|provider|cos|
|provider|qiniu|
|provider|upyun|
|provider|sftp|
|provider|ftp|
|provider|webdav|

## PUT 修改图片信息

PUT /user/photos/{id}

> Body 请求参数

```json
{
  "name": "果程究热",
  "intro": "转周收或车构亲九真省千动记界一。",
  "is_public": true
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |图片ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» name|body|string| 是 |名称|
|» intro|body|string| 否 |简介|
|» is_public|body|boolean| 是 |是否公开|
|» tags|body|[string]| 是 |标签|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## POST 附加标签

POST /user/photos/{id}/tags

> Body 请求参数

```json
[
  "测试1",
  "测试2"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |图片ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|array[object]| 否 |none|

> 返回示例

> 201 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## DELETE 移除标签

DELETE /user/photos/{id}/tags

> Body 请求参数

```json
[
  "测试1",
  "测试2"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |图片ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|array[object]| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## GET 图片时间线

GET /user/photos/timeline

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|q|query|string| 否 |筛选关键字|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "timeline": [
      {
        "date": "2024-09-05",
        "count": 1
      }
    ]
  },
  "time": 1725502467
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» date|string|true|none||日期|
|»»» count|integer|true|none||图片数量|
|» time|integer|true|none||none|

# 用户/分享

## GET 分享列表

GET /user/shares

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|q|query|string| 否 |筛选关键字|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 13,
        "type": "album",
        "slug": "a03806cf516a4ec5808121f539906191",
        "content": null,
        "password": "",
        "view_count": 0,
        "expired_at": null,
        "created_at": "2024-10-11T06:51:58.000000Z",
        "like_count": 0
      },
      {
        "id": 14,
        "type": "album",
        "slug": "29b7b2a1e51f48cb87b947da3d9d3cd5",
        "content": "3123",
        "password": "2",
        "view_count": 0,
        "expired_at": null,
        "created_at": "2024-10-11T06:52:04.000000Z",
        "like_count": 0
      },
      {
        "id": 15,
        "type": "photo",
        "slug": "8c9d47ea2c8146eab4bf4e6cef12af63",
        "content": "22",
        "password": "22322",
        "view_count": 0,
        "expired_at": "2024-10-25T06:52:16.000000Z",
        "created_at": "2024-10-11T06:52:17.000000Z",
        "like_count": 0
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/user/shares?page=1",
      "last": "http://127.0.0.1:8000/api/v2/user/shares?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/user/shares?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/user/shares",
      "per_page": 15,
      "to": 3,
      "total": 3
    }
  },
  "time": 1730873269
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||分享ID|
|»»» type|string|true|none||分享类型|
|»»» slug|string|true|none||分享slug|
|»»» content|string¦null|true|none||内容|
|»»» password|string|true|none||密码|
|»»» view_count|integer|true|none||浏览数量|
|»»» expired_at|string¦null|true|none||到期时间|
|»»» created_at|string|true|none||分享创建时间|
|»»» like_count|integer|true|none||点赞数量|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## POST 创建分享

POST /user/shares

> Body 请求参数

```json
{
  "content": "收装完广保位八边二约等毛党越众。年论土件代公三从半火准比没提般。共去现这九入收带片感题命确来感。都水产强众何放科面阶何少历热。第适石才整情亲那特组现力县。重选合决中建与时七记向情记想构而始。",
  "password": "123456789",
  "expired_at": "2025-04-17 00:16:24",
  "type": "album",
  "ids": [
    1
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» content|body|string| 否 |分享内容|
|» password|body|string| 否 |访问密码|
|» expired_at|body|string| 否 |到期时间|
|» type|body|string| 是 |分享类型|
|» ids|body|[integer]| 是 |相册或图片ID，如果是相册则仅支持传一个ID|

#### 枚举值

|属性|值|
|---|---|
|» type|album|
|» type|photo|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "slug": "b2e629f4-9dbe-48c0-8e3f-2ed4f52c39a0",
    "id": 6
  },
  "time": 1720150373
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» slug|string|true|none||slug|
|»» id|integer|true|none||分享ID|
|» time|integer|true|none||none|

## DELETE 删除分享

DELETE /user/shares

> Body 请求参数

```json
[
  52,
  61,
  96
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|array[integer]| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## GET 分享详情

GET /user/shares/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |分享ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 13,
    "type": "album",
    "slug": "a03806cf516a4ec5808121f539906191",
    "content": null,
    "password": "",
    "view_count": 0,
    "expired_at": null,
    "created_at": "2024-10-11T06:51:58.000000Z",
    "like_count": 0
  },
  "time": 1730873296
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||分享ID|
|»» type|string|true|none||分享类型|
|»» slug|string|true|none||none|
|»» content|null|true|none||none|
|»» password|string|true|none||密码|
|»» view_count|integer|true|none||浏览数量|
|»» expired_at|null|true|none||none|
|»» created_at|string|true|none||创建时间|
|»» like_count|integer|true|none||点赞数量|
|» time|integer|true|none||none|

## PUT 修改分享信息

PUT /user/shares/{id}

> Body 请求参数

```json
{
  "content": "无们新话张门同我走议提边增求面。律更十委线快细技其果约这保。完平验易论认事向清行见得节导。",
  "password": "123456789",
  "expired_at": "2035-08-09 23:51:43"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |分享ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» content|body|string| 否 |分享内容|
|» password|body|string| 否 |访问密码|
|» expired_at|body|string| 否 |到期时间|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

# 用户/订阅/拥有的角色组

## GET 角色组列表

GET /user/groups

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "from": "system",
        "expired_at": null,
        "created_at": "2024-08-31T16:32:34.000000Z",
        "group": {
          "id": 1,
          "name": "系统默认组",
          "intro": "这是系统默认角色组",
          "options": {
            "max_upload_size": 5120,
            "file_expire_seconds": 0,
            "limit_concurrent_upload": 4,
            "limit_per_minute": 20,
            "limit_per_hour": 100,
            "limit_per_day": 300,
            "limit_per_week": 600,
            "limit_per_month": 1000,
            "allow_file_types": [
              "jpg",
              "jpeg",
              "webp",
              "avif",
              "bmp",
              "gif",
              "png",
              "tif",
              "tiff",
              "jp2",
              "j2k",
              "jpf",
              "jpm",
              "jpg2",
              "j2c",
              "jpc",
              "jpx",
              "heic",
              "heif"
            ]
          },
          "is_default": true,
          "is_guest": true
        }
      }
    ],
    "first_page_url": "http://127.0.0.1:8000/api/v2/user/groups?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://127.0.0.1:8000/api/v2/user/groups?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; 上一页",
        "active": false
      },
      {
        "url": "http://127.0.0.1:8000/api/v2/user/groups?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "下一页 &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://127.0.0.1:8000/api/v2/user/groups",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  },
  "time": 1725504447
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||id|
|»»» from|string|true|none||来源|
|»»» expired_at|null|false|none||到期时间，可能为null|
|»»» created_at|string|true|none||创建时间|
|»»» group|[GroupInfo](#schemagroupinfo)|false|none|角色组信息|角色组信息|
|»»»» id|integer|true|none||角色组ID|
|»»»» name|string|true|none||名称|
|»»»» intro|string|true|none||简介|
|»»»» is_default|boolean|true|none||是否为系统默认组|
|»»»» is_guest|boolean|true|none||是否为系统游客组|
|»»»» options|object|true|none||组配置信息|
|»»»»» max_upload_size|integer|true|none||最大上传大小(kb)|
|»»»»» file_expire_seconds|integer|true|none||文件失效时间(秒)，失效后图片将会被删除，0为不限制|
|»»»»» limit_concurrent_upload|integer|true|none||同时上传的文件数量|
|»»»»» limit_per_minute|integer|true|none||一分钟内可上传的文件数量，0为不限制|
|»»»»» limit_per_hour|integer|true|none||一小时内可上传的文件数量，0为不限制|
|»»»»» limit_per_day|integer|true|none||一天内可上传的文件数量，0为不限制|
|»»»»» limit_per_week|integer|true|none||一周内可上传的文件数量，0为不限制|
|»»»»» limit_per_month|integer|true|none||一个月内可上传的文件数量，0为不限制|
|»»»»» allow_file_types|[string]|true|none||支持上传的文件拓展名|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|
|» time|integer|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|from|system|
|from|subscribe|

## DELETE 删除角色组

DELETE /user/groups/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |订阅ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

# 用户/订阅/拥有的容量

## GET 容量列表

GET /user/capacities

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 1,
        "capacity": 1073741824,
        "from": "system",
        "expired_at": null,
        "created_at": "2024-08-31T16:32:34.000000Z"
      }
    ]
  },
  "time": 1725502838
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|false|none||ID|
|»»» capacity|integer|false|none||容量(kb)|
|»»» from|string|false|none||来源|
|»»» expired_at|null|false|none||到期时间，可能为null|
|»»» created_at|string|false|none||创建时间|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|
|» time|integer|true|none||none|

## DELETE 删除容量

DELETE /user/capacities/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |订阅ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

# 用户/订单

## GET 订单列表

GET /user/orders

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|q|query|string| 否 |筛选关键字|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "trade_no": "2024101416111591729_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-14T08:11:15.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101416131041093_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-14T08:13:10.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101416134855719_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-14T08:13:48.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101416392510913_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-14T08:39:25.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101416403328604_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-14T08:40:33.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101416420302064_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-14T08:42:03.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101416422817810_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-14T08:42:28.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101416424962155_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-14T08:42:49.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101510523786297_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-15T02:52:37.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101510585067862_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "unpaid",
        "paid_at": null,
        "canceled_at": null,
        "created_at": "2024-10-15T02:58:50.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101511001280950_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "cancelled",
        "paid_at": null,
        "canceled_at": "2024-10-17T02:34:15.000000Z",
        "created_at": "2024-10-15T03:00:12.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101511005972243_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "cancelled",
        "paid_at": null,
        "canceled_at": "2024-10-17T02:34:12.000000Z",
        "created_at": "2024-10-15T03:00:59.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101513033419533_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "paid",
        "paid_at": null,
        "canceled_at": "2024-10-15T09:15:15.000000Z",
        "created_at": "2024-10-15T05:03:34.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101709465316239_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "cancelled",
        "paid_at": null,
        "canceled_at": "2024-10-17T02:32:05.000000Z",
        "created_at": "2024-10-17T01:46:53.000000Z",
        "coupon": null
      },
      {
        "trade_no": "2024101709550281532_002",
        "amount": 0.01,
        "snapshot": {
          "name": "测试套餐",
          "intro": "test",
          "features": [
            "不限上传次数",
            "无限空间",
            "每月100G流量",
            "全IPLC专线，不限速",
            "原生IP解锁流媒体"
          ],
          "badge": "促销"
        },
        "product": {
          "name": "月卡",
          "duration": 1,
          "price": 0.01
        },
        "pay_method": "",
        "status": "cancelled",
        "paid_at": null,
        "canceled_at": "2024-10-17T02:31:05.000000Z",
        "created_at": "2024-10-17T01:55:02.000000Z",
        "coupon": null
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/user/orders?page=1",
      "last": "http://127.0.0.1:8000/api/v2/user/orders?page=2",
      "prev": null,
      "next": "http://127.0.0.1:8000/api/v2/user/orders?page=2"
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 2,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/user/orders?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/user/orders?page=2",
          "label": "2",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/user/orders?page=2",
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/user/orders",
      "per_page": 15,
      "to": 15,
      "total": 16
    }
  },
  "time": 1730873512
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» trade_no|string|true|none||订单号|
|»»» amount|number|true|none||none|
|»»» snapshot|object|true|none||套餐快照|
|»»»» name|string|true|none||套餐名称|
|»»»» intro|string|true|none||套餐简介|
|»»»» features|[string]|true|none||套餐权益|
|»»»» badge|string|true|none||套餐角标内容|
|»»» product|object|true|none||产品快照|
|»»»» name|string|true|none||产品名称|
|»»»» duration|integer|true|none||时长(秒)|
|»»»» price|number|true|none||none|
|»»» pay_method|string|true|none||支付方式|
|»»» status|string|true|none||状态|
|»»» paid_at|null|true|none||none|
|»»» canceled_at|string¦null|true|none||none|
|»»» created_at|string|true|none||创建时间|
|»»» coupon|null|true|none||none|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|string|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## POST 创建订单

POST /user/orders

> Body 请求参数

```json
{
  "price_id": 1,
  "coupon_code": "VIP"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» price_id|body|integer| 是 |套餐价格ID|
|» coupon_code|body|string| 否 |优惠券|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "trade_no": "2024070811244569879"
  },
  "time": 1720409085
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» trade_no|string|true|none||订单号|
|»» is_paid|boolean|true|none||是否直接支付成功了|
|» time|integer|true|none||none|

## GET 订单详情

GET /user/orders/{trade_no}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|trade_no|path|string| 是 |订单号|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "trade_no": "2024101416111591729_002",
    "amount": 0.01,
    "snapshot": {
      "name": "测试套餐",
      "intro": "test",
      "features": [
        "不限上传次数",
        "无限空间",
        "每月100G流量",
        "全IPLC专线，不限速",
        "原生IP解锁流媒体"
      ],
      "badge": "促销"
    },
    "product": {
      "name": "月卡",
      "duration": 1,
      "price": 0.01
    },
    "pay_method": "",
    "status": "unpaid",
    "paid_at": null,
    "canceled_at": null,
    "created_at": "2024-10-14T08:11:15.000000Z",
    "coupon": null
  },
  "time": 1730873544
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|false|none||订单ID|
|»» trade_no|string|false|none||订单号|
|»» amount|integer|false|none||实付金额(分)|
|»» snapshot|object|false|none||套餐快照|
|»»» name|string|true|none||套餐名称|
|»»» intro|string|true|none||套餐简介|
|»»» features|[string]|true|none||套餐权益|
|»»» badge|string|true|none||套餐角标内容|
|»» product|object|false|none||产品快照|
|»»» name|string|true|none||产品名称|
|»»» duration|integer|true|none||时长(秒)|
|»»» price|integer|true|none||价格(分)|
|»» pay_method|string|false|none||支付方式|
|»» status|string|false|none||状态|
|»» paid_at|string|false|none||支付时间，可能为null|
|»» canceled_at|null|false|none||取消时间，可能为null|
|»» created_at|string|false|none||创建时间|
|»» coupon|object|false|none||优惠券信息，可能为null|
|»»» name|string|true|none||优惠券名称|
|»»» code|string|true|none||券码|
|» time|integer|true|none||none|

## DELETE 删除订单

DELETE /user/orders/{trade_no}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|trade_no|path|string| 是 |订单号|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## PUT 取消订单

PUT /user/orders/{trade_no}/cancel

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|trade_no|path|string| 是 |订单号|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## POST 预览订单

POST /user/orders/preview

> Body 请求参数

```json
{
  "price_id": 1,
  "coupon_code": "VIP"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» price_id|body|integer| 是 |套餐价格ID|
|» coupon_code|body|string| 否 |优惠券|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "amount": 1,
    "deduct_amount": 0
  },
  "time": 1720408983
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» amount|integer|true|none||订单金额|
|»» deduct_amount|integer|true|none||抵扣金额|
|» time|integer|true|none||none|

## POST 支付订单

POST /user/orders/{trade_no}/pay

> Body 请求参数

```json
{
  "provider": "wechat_h5",
  "return_url": "http://arytsum.cc/ymmtwlrnkn",
  "cancel_url": "http://cpyikbxrh.nr/snpjtee"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|trade_no|path|string| 是 |订单号|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» provider|body|string| 是 |支付提供者|
|» return_url|body|string| 否 |同步跳转地址，当使用paypal时必传，否则支付时无法跳转回站点|
|» cancel_url|body|string| 否 |取消支付后跳转地址|

#### 枚举值

|属性|值|
|---|---|
|» provider|alipay_web|
|» provider|alipay_h5|
|» provider|alipay_app|
|» provider|alipay_scan|
|» provider|wechat_scan|
|» provider|wechat_h5|
|» provider|wechat_app|
|» provider|unipay_web|
|» provider|unipay_h5|
|» provider|unipay_scan|
|» provider|paypal_web|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "url": "https://www.sandbox.paypal.com/checkoutnow?token=0EA455784W866280V"
  },
  "time": 1720576901
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» url|string|true|none||支付 URL|
|» time|integer|true|none||none|

# 用户/工单

## GET 工单列表

GET /user/tickets

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|q|query|string| 否 |筛选关键字|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 1,
        "issue_no": "2024101116374225770",
        "title": "测试测试测试测试测试测试测试测试测试测试测试测试测试",
        "level": "medium",
        "status": "in_progress",
        "created_at": "2024-10-11T08:37:42.000000Z"
      },
      {
        "id": 2,
        "issue_no": "2024101116415781018",
        "title": "测试",
        "level": "medium",
        "status": "completed",
        "created_at": "2024-10-11T08:41:57.000000Z"
      },
      {
        "id": 3,
        "issue_no": "2024101613172606144",
        "title": "test",
        "level": "low",
        "status": "in_progress",
        "created_at": "2024-10-16T05:17:26.000000Z"
      },
      {
        "id": 4,
        "issue_no": "2024101613261766249",
        "title": "2",
        "level": "low",
        "status": "completed",
        "created_at": "2024-10-16T05:26:17.000000Z"
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/user/tickets?page=1",
      "last": "http://127.0.0.1:8000/api/v2/user/tickets?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/user/tickets?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/user/tickets",
      "per_page": 15,
      "to": 4,
      "total": 4
    }
  },
  "time": 1730873644
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||none|
|»»» issue_no|string|true|none||工单号|
|»»» title|string|true|none||工单标题|
|»»» level|string|true|none||工单级别|
|»»» status|string|true|none||工单状态|
|»»» created_at|string|true|none||创建时间|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## POST 创建工单

POST /user/tickets

> Body 请求参数

```json
{
  "title": "组此团由百设思",
  "level": "high",
  "content": "tempor velit dolor"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» title|body|string| 是 |标题|
|» level|body|string| 是 |工单级别|
|» content|body|string| 是 |内容|

#### 枚举值

|属性|值|
|---|---|
|» level|low|
|» level|medium|
|» level|high|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "issue_no": "2024070517062649186"
  },
  "time": 1720170386
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» issue_no|string|true|none||工单号|
|» time|integer|true|none||none|

## GET 工单详情

GET /user/tickets/{issue_no}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|issue_no|path|string| 是 |工单号|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 1,
    "issue_no": "2024070516574029911",
    "title": "关于 Lsky Pro 2.0 + 后台在线升级的问题",
    "level": "low",
    "status": "in_progress",
    "created_at": "2024-07-05T08:57:40.000000Z"
  },
  "time": 1720170944
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||工单ID|
|»» issue_no|string|true|none||工单号|
|»» title|string|true|none||标题|
|»» level|string|true|none||级别|
|»» status|string|true|none||状态|
|»» created_at|string|true|none||创建时间|
|» time|integer|true|none||none|

## DELETE 删除工单

DELETE /user/tickets/{issue_no}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|issue_no|path|string| 是 |工单编号|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

## GET 工单回复列表

GET /user/tickets/{issue_no}/replies

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|issue_no|path|string| 是 |工单号|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 5,
        "content": "e",
        "read_at": null,
        "created_at": "2024-10-12T08:14:18.000000Z",
        "user": {
          "id": 1,
          "name": "admin",
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 6,
        "content": "牛批",
        "read_at": null,
        "created_at": "2024-10-12T08:16:37.000000Z",
        "user": {
          "id": 1,
          "name": "admin",
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      }
    ],
    "first_page_url": "http://127.0.0.1:8000/api/v2/user/tickets/2024101116374225770/replies?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://127.0.0.1:8000/api/v2/user/tickets/2024101116374225770/replies?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; 上一页",
        "active": false
      },
      {
        "url": "http://127.0.0.1:8000/api/v2/user/tickets/2024101116374225770/replies?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "下一页 &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://127.0.0.1:8000/api/v2/user/tickets/2024101116374225770/replies",
    "per_page": 15,
    "prev_page_url": null,
    "to": 2,
    "total": 2
  },
  "time": 1730107455
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||回复ID|
|»»» content|string|true|none||回复内容|
|»»» read_at|string¦null|true|none||已读时间，可能为null|
|»»» created_at|string|true|none||回复时间|
|»»» user|object|true|none||用户信息|
|»»»» id|integer|true|none||用户ID|
|»»»» avatar_url|string|true|none||头像，可能为空|
|»»»» name|string|true|none||名称|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|
|» time|integer|true|none||none|

## POST 回复工单

POST /user/tickets/{issue_no}/reply

> Body 请求参数

```json
{
  "content": "内者会王算较广任究山小合响关。根技大容方小则回常再反出例收国。将目权王往月思验标面万去。前飞变位观持原得名打料记车。年结程声这体火前处提积西开个争府任。织水活面光化且界包提白声。律保划才空气组从明公每命带流平技查器。",
  "is_notify": true
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|issue_no|path|string| 是 |工单号|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|
|body|body|object| 否 |none|
|» content|body|string| 是 |回复内容|
|» is_notify|body|boolean| 是 |是否需要接收通知|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1720171424
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## PUT 关闭工单

PUT /user/tickets/{issue_no}/close

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|issue_no|path|string| 是 |工单编号|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

# 广场

## GET 相册详情

GET /explore/albums/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |相册ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 5,
    "name": "2222",
    "intro": "123123232232\n31231233312332",
    "created_at": "2024-09-24T01:41:36.000000Z",
    "photo_count": 5,
    "is_liked": false,
    "covers": [
      "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
      "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
      "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg"
    ],
    "tags": [],
    "user": {
      "id": 1,
      "name": "admin",
      "username": "admin2",
      "is_admin": true,
      "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
    }
  },
  "time": 1730796380
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||相册ID|
|»» name|string|true|none||名称|
|»» intro|string|true|none||简介|
|»» created_at|string|true|none||创建时间|
|»» photo_count|integer|true|none||图片数量|
|»» is_liked|boolean|true|none||none|
|»» covers|[string]|true|none||封面图片，最多三张|
|»» tags|[string]|true|none||标签|
|»» user|object|true|none||用户信息|
|»»» id|integer|true|none||用户ID|
|»»» name|string|true|none||用户昵称|
|»»» username|string|true|none||用户名|
|»»» is_admin|boolean|true|none||是否为管理员|
|»»» avatar_url|string|true|none||头像地址|
|» time|integer|true|none||none|

## GET 图片详情

GET /explore/photos/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer| 是 |图片ID|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 10,
    "name": "IMG_0439111",
    "intro": "223331111",
    "extension": "png",
    "width": 1170,
    "height": 2532,
    "is_liked": true,
    "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
    "public_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
    "tags": [
      {
        "id": 3,
        "name": "123"
      },
      {
        "id": 4,
        "name": "213"
      },
      {
        "id": 5,
        "name": "4123"
      },
      {
        "id": 6,
        "name": "222"
      },
      {
        "id": 7,
        "name": "2222"
      },
      {
        "id": 8,
        "name": "423"
      },
      {
        "id": 9,
        "name": "412"
      },
      {
        "id": 10,
        "name": "4324"
      },
      {
        "id": 11,
        "name": "111111"
      }
    ],
    "user": {
      "id": 1,
      "name": "admin",
      "username": "admin2",
      "is_admin": true,
      "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
    }
  },
  "time": 1730796155
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||图片ID|
|»» name|string|true|none||名称|
|»» intro|string|true|none||简介|
|»» extension|string|true|none||拓展名|
|»» width|integer|true|none||宽度|
|»» height|integer|true|none||高度|
|»» is_liked|boolean|true|none||当前用户是否点赞了|
|»» thumbnail_url|string|true|none||缩略图链接|
|»» public_url|string|true|none||图片链接|
|»» tags|[object]|true|none||标签|
|»»» id|integer|true|none||标签ID|
|»»» name|string|true|none||标签名称|
|»» user|object|true|none||用户信息|
|»»» id|integer|true|none||用户ID|
|»»» name|string|true|none||用户昵称|
|»»» username|string|true|none||用户名|
|»»» is_admin|boolean|true|none||是否为管理员|
|»»» avatar_url|string|true|none||头像地址|
|» time|integer|true|none||none|

# 广场/图片

## GET 图片列表

GET /explore/photos

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer| 否 |页码|
|per_page|query|integer| 否 |每页展示数量|
|q|query|string| 否 |筛选关键字|
|Accept|header|string| 否 |none|
|X-XSRF-TOKEN|header|string| 否 |none|
|Authorization|header|string| 否 |none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 17,
        "name": "5de83214350f1daa2806a1df507d6546",
        "intro": "",
        "extension": "png",
        "width": 351,
        "height": 656,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241017/5de83214350f1daa2806a1df507d6546.png",
        "public_url": "http://127.0.0.1:8000/uploads/20241017/5de83214350f1daa2806a1df507d6546.png",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 16,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "extension": "jpg",
        "width": 1000,
        "height": 1000,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241017/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20241017/399fa7ca41917e534c31950ce412b51b.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 15,
        "name": "5de83214350f1daa2806a1df507d6546",
        "intro": "",
        "extension": "png",
        "width": 351,
        "height": 656,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241016/5de83214350f1daa2806a1df507d6546.png",
        "public_url": "http://127.0.0.1:8000/uploads/20241016/5de83214350f1daa2806a1df507d6546.png",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 14,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "extension": "jpg",
        "width": 1000,
        "height": 1000,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241016/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20241016/399fa7ca41917e534c31950ce412b51b.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 9,
        "name": "真正的程序员",
        "intro": "",
        "extension": "png",
        "width": 571,
        "height": 512,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 10,
        "name": "IMG_0439111",
        "intro": "223331111",
        "extension": "png",
        "width": 1170,
        "height": 2532,
        "is_liked": true,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "tags": [
          {
            "id": 3,
            "name": "123"
          },
          {
            "id": 4,
            "name": "213"
          },
          {
            "id": 5,
            "name": "4123"
          },
          {
            "id": 6,
            "name": "222"
          },
          {
            "id": 7,
            "name": "2222"
          },
          {
            "id": 8,
            "name": "423"
          },
          {
            "id": 9,
            "name": "412"
          },
          {
            "id": 10,
            "name": "4324"
          },
          {
            "id": 11,
            "name": "111111"
          }
        ],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 12,
        "name": "ChMkJlbKwdSIBXyaABDQ5_X5vbEAALGegFJFcIAEND_912",
        "intro": "",
        "extension": "jpg",
        "width": 1920,
        "height": 1200,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 13,
        "name": "IMG_1499",
        "intro": "",
        "extension": "png",
        "width": 1170,
        "height": 2532,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 6,
        "name": "a157829fe078dad9bbfd268ff1ec3b01",
        "intro": "",
        "extension": "jpg",
        "width": 1080,
        "height": 1080,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 2,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "extension": "jpg",
        "width": 1000,
        "height": 1000,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240918/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20240918/399fa7ca41917e534c31950ce412b51b.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 1,
        "name": "真正的程序员",
        "intro": "",
        "extension": "png",
        "width": 571,
        "height": 512,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240905/2afba671098674026525895187e29c16.png",
        "public_url": "http://127.0.0.1:8000/uploads/20240905/2afba671098674026525895187e29c16.png",
        "tags": [
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          },
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          },
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          }
        ],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/explore/photos?page=1",
      "last": "http://127.0.0.1:8000/api/v2/explore/photos?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/explore/photos?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/explore/photos",
      "per_page": 20,
      "to": 11,
      "total": 11
    }
  },
  "time": 1730872473
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||图片ID|
|»»» name|string|true|none||名称|
|»»» intro|string|true|none||简介|
|»»» extension|string|true|none||拓展名|
|»»» width|integer|true|none||宽度|
|»»» height|integer|true|none||高度|
|»»» is_liked|boolean|true|none||当前用户是否点赞了|
|»»» thumbnail_url|string|true|none||缩略图链接|
|»»» public_url|string|true|none||图片链接|
|»»» tags|[object]|true|none||标签|
|»»»» id|integer|true|none||标签ID|
|»»»» name|string|true|none||标签名称|
|»»» user|object|true|none||用户信息|
|»»»» id|integer|true|none||用户ID|
|»»»» name|string|true|none||用户昵称|
|»»»» username|string|true|none||用户名|
|»»»» is_admin|boolean|true|none||是否为系统管理员|
|»»»» avatar_url|string|true|none||用户头像，可能为空|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## POST 举报图片

POST /explore/photos/{id}/report

> Body 请求参数

```json
{
  "content": "式儿先去作将质家发且完小金技方间极。取标话这满向才音然达千究调。今论世整听情也听那维化它月格。权响建离电上动备水路和况求由。生边力间当命传先题论把越支本公持指然。么照市持机高质本什花代见月党。"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||图片ID|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|
|body|body|[ReportContent](#schemareportcontent)| 否 | 提交举报内容|none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1730359814
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 点赞图片

POST /explore/photos/{id}/like

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||图片ID|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1720490853
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## DELETE 取消点赞图片

DELETE /explore/photos/{id}/unlike

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||图片ID|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

# 广场/用户

## POST 举报用户

POST /explore/users/{username}/report

> Body 请求参数

```json
{
  "content": "都手群京世反但则思集给受太战约了族。口广厂意红党之命加次没那上化。音资一效音属型造它而格头存。极酸参温展严劳况情局消强便现在。意来队存史事总委六置改总。"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|username|path|string| 是 ||用户名|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|
|body|body|[ReportContent](#schemareportcontent)| 否 | 提交举报内容|none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1730786000
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## GET 相册列表

GET /explore/users/{username}/albums

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|username|path|string| 是 ||用户名|
|page|query|integer| 否 ||页码|
|per_page|query|integer| 否 ||每页展示数量|
|q|query|string| 否 ||筛选关键字|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 18,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-10-11T02:05:24.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 17,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-27T00:33:05.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 16,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-26T08:04:03.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 15,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-26T08:03:49.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 14,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-26T08:03:33.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 13,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-26T07:17:19.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 12,
        "name": "",
        "intro": "",
        "created_at": "2024-09-26T07:16:44.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 5,
        "name": "2222",
        "intro": "123123232232\n31231233312332",
        "created_at": "2024-09-24T01:41:36.000000Z",
        "photo_count": 5,
        "is_liked": false,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
          "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg"
        ],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 4,
        "name": "新建相册",
        "intro": "这是一个新建相册",
        "created_at": "2024-09-24T01:40:56.000000Z",
        "photo_count": 1,
        "is_liked": false,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG"
        ],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 3,
        "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
        "intro": "手思水装建事先工院下具同。",
        "created_at": "2024-09-24T01:38:03.000000Z",
        "photo_count": 6,
        "is_liked": false,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
          "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg"
        ],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/explore/albums?page=1",
      "last": "http://127.0.0.1:8000/api/v2/explore/albums?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/explore/albums?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/explore/albums",
      "per_page": 20,
      "to": 10,
      "total": 10
    }
  },
  "time": 1730872629
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||相册ID|
|»»» name|string|true|none||名称|
|»»» intro|string|true|none||简介|
|»»» created_at|string|true|none||创建时间|
|»»» photo_count|integer|true|none||图片数量|
|»»» is_liked|boolean|true|none||当前用户是否点赞了|
|»»» covers|[string]|true|none||封面图片，最多三张|
|»»» tags|[string]|true|none||标签|
|»»» user|object|true|none||用户信息|
|»»»» id|integer|true|none||用户ID|
|»»»» name|string|true|none||用户昵称|
|»»»» username|string|true|none||用户名|
|»»»» is_admin|boolean|true|none||是否为系统管理员|
|»»»» avatar_url|string|true|none||用户头像，可能为空|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## GET 图片列表

GET /explore/users/{username}/photos

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|username|path|string| 是 ||用户名|
|page|query|integer| 否 ||页码|
|per_page|query|integer| 否 ||每页展示数量|
|q|query|string| 否 ||筛选关键字|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 17,
        "name": "5de83214350f1daa2806a1df507d6546",
        "intro": "",
        "extension": "png",
        "width": 351,
        "height": 656,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241017/5de83214350f1daa2806a1df507d6546.png",
        "public_url": "http://127.0.0.1:8000/uploads/20241017/5de83214350f1daa2806a1df507d6546.png",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 16,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "extension": "jpg",
        "width": 1000,
        "height": 1000,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241017/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20241017/399fa7ca41917e534c31950ce412b51b.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 15,
        "name": "5de83214350f1daa2806a1df507d6546",
        "intro": "",
        "extension": "png",
        "width": 351,
        "height": 656,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241016/5de83214350f1daa2806a1df507d6546.png",
        "public_url": "http://127.0.0.1:8000/uploads/20241016/5de83214350f1daa2806a1df507d6546.png",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 14,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "extension": "jpg",
        "width": 1000,
        "height": 1000,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20241016/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20241016/399fa7ca41917e534c31950ce412b51b.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 9,
        "name": "真正的程序员",
        "intro": "",
        "extension": "png",
        "width": 571,
        "height": 512,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 10,
        "name": "IMG_0439111",
        "intro": "223331111",
        "extension": "png",
        "width": 1170,
        "height": 2532,
        "is_liked": true,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "tags": [
          {
            "id": 3,
            "name": "123"
          },
          {
            "id": 4,
            "name": "213"
          },
          {
            "id": 5,
            "name": "4123"
          },
          {
            "id": 6,
            "name": "222"
          },
          {
            "id": 7,
            "name": "2222"
          },
          {
            "id": 8,
            "name": "423"
          },
          {
            "id": 9,
            "name": "412"
          },
          {
            "id": 10,
            "name": "4324"
          },
          {
            "id": 11,
            "name": "111111"
          }
        ],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 12,
        "name": "ChMkJlbKwdSIBXyaABDQ5_X5vbEAALGegFJFcIAEND_912",
        "intro": "",
        "extension": "jpg",
        "width": 1920,
        "height": 1200,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 13,
        "name": "IMG_1499",
        "intro": "",
        "extension": "png",
        "width": 1170,
        "height": 2532,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 6,
        "name": "a157829fe078dad9bbfd268ff1ec3b01",
        "intro": "",
        "extension": "jpg",
        "width": 1080,
        "height": 1080,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 2,
        "name": "7a585313ed855e8d652cbb3154a6056e",
        "intro": "",
        "extension": "jpg",
        "width": 1000,
        "height": 1000,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240918/399fa7ca41917e534c31950ce412b51b.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20240918/399fa7ca41917e534c31950ce412b51b.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 1,
        "name": "真正的程序员",
        "intro": "",
        "extension": "png",
        "width": 571,
        "height": 512,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240905/2afba671098674026525895187e29c16.png",
        "public_url": "http://127.0.0.1:8000/uploads/20240905/2afba671098674026525895187e29c16.png",
        "tags": [
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          },
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          },
          {
            "id": 1,
            "name": "街头摄影"
          },
          {
            "id": 2,
            "name": "城市建筑"
          }
        ],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/explore/photos?page=1",
      "last": "http://127.0.0.1:8000/api/v2/explore/photos?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/explore/photos?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/explore/photos",
      "per_page": 20,
      "to": 11,
      "total": 11
    }
  },
  "time": 1730872473
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||图片ID|
|»»» name|string|true|none||名称|
|»»» intro|string|true|none||简介|
|»»» extension|string|true|none||拓展名|
|»»» width|integer|true|none||宽度|
|»»» height|integer|true|none||高度|
|»»» is_liked|boolean|true|none||当前用户是否点赞了|
|»»» thumbnail_url|string|true|none||缩略图链接|
|»»» public_url|string|true|none||图片链接|
|»»» tags|[object]|true|none||标签|
|»»»» id|integer|true|none||标签ID|
|»»»» name|string|true|none||标签名称|
|»»» user|object|true|none||用户信息|
|»»»» id|integer|true|none||用户ID|
|»»»» name|string|true|none||用户昵称|
|»»»» username|string|true|none||用户名|
|»»»» is_admin|boolean|true|none||是否为系统管理员|
|»»»» avatar_url|string|true|none||用户头像，可能为空|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## GET 用户主页信息

GET /explore/users/{username}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|username|path|string| 是 ||用户名|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 1,
    "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg",
    "name": "admin",
    "username": "admin2",
    "location": "1",
    "bio": "1",
    "interests": [
      "32123",
      "4123412412412",
      "2",
      "2",
      "33"
    ],
    "socials": [
      "https://github.com",
      "https://www.cos.cpm22"
    ],
    "is_admin": true,
    "created_at": "2024-08-31T16:32:34.000000Z",
    "photo_count": 11,
    "album_count": 10,
    "liked_photo_count": 1,
    "liked_album_count": 0
  },
  "time": 1730713266
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||用户ID|
|»» avatar_url|string|true|none||none|
|»» name|string|true|none||昵称|
|»» username|string|true|none||用户名|
|»» location|string|true|none||位置|
|»» bio|string|true|none||个性签名|
|»» interests|[string]|true|none||兴趣爱好|
|»» socials|[string]|true|none||none|
|»» is_admin|boolean|true|none||是否为系统管理员|
|»» created_at|string|true|none||注册时间|
|»» photo_count|integer|true|none||创建的图片数量|
|»» album_count|integer|true|none||创建的相册数量|
|»» liked_photo_count|integer|true|none||喜欢的图片数量|
|»» liked_album_count|integer|true|none||喜欢的相册数量|
|» time|integer|true|none||none|

# 广场/相册

## GET 相册列表

GET /explore/albums

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|integer| 否 ||页码|
|per_page|query|integer| 否 ||每页展示数量|
|q|query|string| 否 ||筛选关键字|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 18,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-10-11T02:05:24.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 17,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-27T00:33:05.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 16,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-26T08:04:03.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 15,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-26T08:03:49.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 14,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-26T08:03:33.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 13,
        "name": "新建相册",
        "intro": "",
        "created_at": "2024-09-26T07:17:19.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 12,
        "name": "",
        "intro": "",
        "created_at": "2024-09-26T07:16:44.000000Z",
        "photo_count": 0,
        "is_liked": false,
        "covers": [],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 5,
        "name": "2222",
        "intro": "123123232232\n31231233312332",
        "created_at": "2024-09-24T01:41:36.000000Z",
        "photo_count": 5,
        "is_liked": false,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
          "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg"
        ],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 4,
        "name": "新建相册",
        "intro": "这是一个新建相册",
        "created_at": "2024-09-24T01:40:56.000000Z",
        "photo_count": 1,
        "is_liked": false,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG"
        ],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 3,
        "name": "具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合具义情族合",
        "intro": "手思水装建事先工院下具同。",
        "created_at": "2024-09-24T01:38:03.000000Z",
        "photo_count": 6,
        "is_liked": false,
        "covers": [
          "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
          "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
          "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg"
        ],
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/explore/albums?page=1",
      "last": "http://127.0.0.1:8000/api/v2/explore/albums?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/explore/albums?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/explore/albums",
      "per_page": 20,
      "to": 10,
      "total": 10
    }
  },
  "time": 1730872629
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||相册ID|
|»»» name|string|true|none||名称|
|»»» intro|string|true|none||简介|
|»»» created_at|string|true|none||创建时间|
|»»» photo_count|integer|true|none||图片数量|
|»»» is_liked|boolean|true|none||当前用户是否点赞了|
|»»» covers|[string]|true|none||封面图片，最多三张|
|»»» tags|[string]|true|none||标签|
|»»» user|object|true|none||用户信息|
|»»»» id|integer|true|none||用户ID|
|»»»» name|string|true|none||用户昵称|
|»»»» username|string|true|none||用户名|
|»»»» is_admin|boolean|true|none||是否为系统管理员|
|»»»» avatar_url|string|true|none||用户头像，可能为空|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## GET 图片列表

GET /explore/albums/{id}/photos

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||相册ID|
|page|query|integer| 否 ||页码|
|per_page|query|integer| 否 ||每页展示数量|
|q|query|string| 否 ||筛选关键字|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 9,
        "name": "真正的程序员",
        "intro": "",
        "extension": "png",
        "width": 571,
        "height": 512,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/2afba671098674026525895187e29c16.png",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 10,
        "name": "IMG_0439111",
        "intro": "223331111",
        "extension": "png",
        "width": 1170,
        "height": 2532,
        "is_liked": true,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/e6bbc1777d6b2458ddeacf76d557b604.PNG",
        "tags": [
          {
            "id": 3,
            "name": "123"
          },
          {
            "id": 4,
            "name": "213"
          },
          {
            "id": 5,
            "name": "4123"
          },
          {
            "id": 6,
            "name": "222"
          },
          {
            "id": 7,
            "name": "2222"
          },
          {
            "id": 8,
            "name": "423"
          },
          {
            "id": 9,
            "name": "412"
          },
          {
            "id": 10,
            "name": "4324"
          },
          {
            "id": 11,
            "name": "111111"
          }
        ],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 12,
        "name": "ChMkJlbKwdSIBXyaABDQ5_X5vbEAALGegFJFcIAEND_912",
        "intro": "",
        "extension": "jpg",
        "width": 1920,
        "height": 1200,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/5c6ad49c962c3731412fd6d72765e6d5.jpg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 13,
        "name": "IMG_1499",
        "intro": "",
        "extension": "png",
        "width": 1170,
        "height": 2532,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      },
      {
        "id": 6,
        "name": "a157829fe078dad9bbfd268ff1ec3b01",
        "intro": "",
        "extension": "jpg",
        "width": 1080,
        "height": 1080,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/f60751b682c4cdf0106d63aaf97ef9ba.jpeg",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/explore/albums/5/photos?page=1",
      "last": "http://127.0.0.1:8000/api/v2/explore/albums/5/photos?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/explore/albums/5/photos?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/explore/albums/5/photos",
      "per_page": 20,
      "to": 5,
      "total": 5
    }
  },
  "time": 1730876140
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||图片ID|
|»»» name|string|true|none||名称|
|»»» intro|string|true|none||简介|
|»»» extension|string|true|none||拓展名|
|»»» width|integer|true|none||宽度|
|»»» height|integer|true|none||高度|
|»»» is_liked|boolean|true|none||当前用户是否点赞了|
|»»» thumbnail_url|string|true|none||缩略图链接|
|»»» public_url|string|true|none||图片链接|
|»»» tags|[object]|true|none||标签|
|»»»» id|integer|true|none||标签ID|
|»»»» name|string|true|none||标签名称|
|»»» user|object|true|none||用户信息|
|»»»» id|integer|true|none||用户ID|
|»»»» name|string|true|none||用户昵称|
|»»»» username|string|true|none||用户名|
|»»»» is_admin|boolean|true|none||是否为系统管理员|
|»»»» avatar_url|string|true|none||用户头像，可能为空|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|» time|integer|true|none||none|

## POST 举报相册

POST /explore/albums/{id}/report

> Body 请求参数

```json
{
  "content": "值安火管委通要特而命府将由头算。维南被节没子没严革列总学有越土感今。红民因变值离品领持者着种置边。取委共住题龙何群受志确火眼。料素内大入青思件门联精由见国前林市。"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||相册ID|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|
|body|body|[ReportContent](#schemareportcontent)| 否 | 提交举报内容|none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1720493410
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 点赞相册

POST /explore/albums/{id}/like

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||相册ID|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 201 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## DELETE 取消点赞相册

DELETE /explore/albums/{id}/unlike

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||相册ID|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 204 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

# 套餐

## GET 套餐列表

GET /plans

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|integer| 否 ||页码|
|per_page|query|integer| 否 ||每页展示数量|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "type": "vip",
        "name": "测试套餐",
        "intro": "test",
        "features": [
          "不限上传次数"
        ],
        "badge": "促销"
      }
    ],
    "first_page_url": "http://127.0.0.1:8000/api/v2/plans?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://127.0.0.1:8000/api/v2/plans?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; 上一页",
        "active": false
      },
      {
        "url": "http://127.0.0.1:8000/api/v2/plans?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "下一页 &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://127.0.0.1:8000/api/v2/plans",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  },
  "time": 1725503741
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||套餐ID|
|»»» type|string|true|none||套餐类型|
|»»» name|string|true|none||名称|
|»»» intro|string|true|none||简介|
|»»» features|[string]|true|none||权益|
|»»» badge|string|true|none||角标内容|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|
|» time|integer|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|type|vip|
|type|storage|

## GET 套餐详情

GET /plans/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||套餐ID|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 1,
    "name": "测试",
    "intro": "123",
    "features": [
      "不限上传次数"
    ],
    "badge": "促销",
    "prices": [
      {
        "id": 1,
        "name": "月卡",
        "duration": 43776,
        "price": 1
      },
      {
        "id": 2,
        "name": "季卡",
        "duration": 131328,
        "price": 1
      }
    ]
  },
  "time": 1720401270
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||套餐ID|
|»» type|string|true|none||套餐类型|
|»» name|string|true|none||名称|
|»» intro|string|true|none||简介|
|»» features|[string]|true|none||权益列表|
|»» badge|string|true|none||角标内容|
|»» prices|[object]|true|none||价格列表|
|»»» id|integer|true|none||价格ID|
|»»» name|string|true|none||名称|
|»»» duration|integer|true|none||时长(秒)|
|»»» price|integer|true|none||价格(分)|
|» time|integer|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|type|vip|
|type|storage|

# 页面

## GET 页面列表

GET /pages

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|integer| 否 ||页码|
|per_page|query|integer| 否 ||每页展示数量|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "type": "internal",
        "name": "关于我们",
        "icon": "fa-users",
        "title": "关于我们",
        "slug": "about",
        "url": "",
        "view_count": 1
      }
    ],
    "first_page_url": "http://127.0.0.1:8000/api/v2/pages?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://127.0.0.1:8000/api/v2/pages?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; 上一页",
        "active": false
      },
      {
        "url": "http://127.0.0.1:8000/api/v2/pages?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "下一页 &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://127.0.0.1:8000/api/v2/pages",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  },
  "time": 1725504059
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|true|none||页面ID|
|»»» type|string|true|none||页面类型|
|»»» name|string|true|none||页面名称|
|»»» icon|string|true|none||页面图标，默认支持的图标：https://fontawesome.com/v5/search?m=free|
|»»» title|string|true|none||页面标题|
|»»» slug|string|true|none||slug|
|»»» url|string|true|none||跳转url，type=external时有效|
|»»» view_count|integer|true|none||浏览次数|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|
|» time|integer|true|none||none|

## GET 页面详情

GET /pages/{slug}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|slug|path|string| 是 ||slug|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 1,
    "type": "internal",
    "name": "关于我们",
    "icon": "fa-solid fa-user",
    "title": "关于我们",
    "content": "<p>hhhh</p>",
    "slug": "about",
    "url": "",
    "view_count": 31,
    "created_at": "2024-08-05T17:41:02.000000Z"
  },
  "time": 1723778242
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||页面ID|
|»» type|string|true|none||页面类型|
|»» name|string|true|none||页面名称|
|»» icon|string|true|none||页面图标，默认支持的图标：https://fontawesome.com/v5/search?m=free|
|»» title|string|true|none||页面标题|
|»» content|string|true|none||内容|
|»» slug|string|true|none||slug|
|»» url|string|true|none||跳转url，type=external时有效|
|»» view_count|integer|true|none||浏览次数|
|»» created_at|string|true|none||创建时间|
|» time|integer|true|none||none|

# 分享

## GET 获取分享详情

GET /shares/{slug}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|slug|path|string| 是 ||none|
|password|query|string| 否 ||密码|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "id": 15,
    "type": "photo",
    "slug": "8c9d47ea2c8146eab4bf4e6cef12af63",
    "content": "22",
    "view_count": 14,
    "expired_at": "2024-11-25T06:52:16.000000Z",
    "created_at": "2024-10-11T06:52:17.000000Z",
    "like_count": 0,
    "is_liked": false,
    "is_valid": true,
    "user": {
      "id": 1,
      "name": "admin",
      "username": "admin2",
      "is_admin": true,
      "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
    }
  },
  "time": 1730897285
}
```

```json
{
  "status": "error",
  "message": "分享已过期",
  "time": 1720159760
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||图片ID|
|»» type|string|true|none||分享类型|
|»» slug|string|true|none||none|
|»» content|string|true|none||分享内容|
|»» view_count|integer|true|none||浏览次数|
|»» expired_at|string|true|none||到期时间|
|»» created_at|string|true|none||创建时间|
|»» like_count|integer|true|none||点赞数量|
|»» is_liked|boolean|true|none||当前用户是否点赞了|
|»» is_valid|boolean|true|none||是否已验证通过|
|»» user|object|true|none||none|
|»»» id|integer|true|none||none|
|»»» name|string|true|none||none|
|»»» username|string|true|none||none|
|»»» is_admin|boolean|true|none||none|
|»»» avatar_url|string|true|none||none|
|» time|integer|true|none||none|

状态码 **404**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## GET 获取分享图片列表

GET /shares/{slug}/photos

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|slug|path|string| 是 ||none|
|page|query|integer| 否 ||页码|
|per_page|query|integer| 否 ||每页展示数量|
|q|query|string| 否 ||筛选关键字|
|password|query|string| 否 ||密码|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "data": [
      {
        "id": 13,
        "name": "IMG_1499",
        "intro": "",
        "extension": "png",
        "width": 1170,
        "height": 2532,
        "is_liked": false,
        "thumbnail_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "public_url": "http://127.0.0.1:8000/uploads/20240919/6fc44935eb88b1434a73b0e1ed05bde0.PNG",
        "tags": [],
        "user": {
          "id": 1,
          "name": "admin",
          "username": "admin2",
          "is_admin": true,
          "avatar_url": "http://127.0.0.1:8000/storage/avatars/qWc40VHTCggI2RaylMPfVhq4NOdI3ouUBf8SQJfO.jpg"
        }
      }
    ],
    "links": {
      "first": "http://127.0.0.1:8000/api/v2/shares/8c9d47ea2c8146eab4bf4e6cef12af63/photos?page=1",
      "last": "http://127.0.0.1:8000/api/v2/shares/8c9d47ea2c8146eab4bf4e6cef12af63/photos?page=1",
      "prev": null,
      "next": null
    },
    "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 1,
      "links": [
        {
          "url": null,
          "label": "&laquo; 上一页",
          "active": false
        },
        {
          "url": "http://127.0.0.1:8000/api/v2/shares/8c9d47ea2c8146eab4bf4e6cef12af63/photos?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "下一页 &raquo;",
          "active": false
        }
      ],
      "path": "http://127.0.0.1:8000/api/v2/shares/8c9d47ea2c8146eab4bf4e6cef12af63/photos",
      "per_page": 15,
      "to": 1,
      "total": 1
    },
    "is_valid": true
  },
  "time": 1730900230
}
```

```json
{
  "status": "error",
  "message": "密码错误",
  "time": 1720156599
}
```

```json
{
  "status": "error",
  "message": "分享已过期",
  "time": 1720159802
}
```

> 404 Response

```json
{
  "status": "string",
  "message": "string",
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|false|none||none|
|»»» name|string|false|none||none|
|»»» intro|string|false|none||none|
|»»» extension|string|false|none||none|
|»»» width|integer|false|none||none|
|»»» height|integer|false|none||none|
|»»» is_liked|boolean|false|none||none|
|»»» thumbnail_url|string|false|none||none|
|»»» public_url|string|false|none||none|
|»»» tags|[string]|false|none||none|
|»»» user|object|false|none||none|
|»»»» id|integer|true|none||none|
|»»»» name|string|true|none||none|
|»»»» username|string|true|none||none|
|»»»» is_admin|boolean|true|none||none|
|»»»» avatar_url|string|true|none||none|
|»» links|object|true|none||none|
|»»» first|string|true|none||none|
|»»» last|string|true|none||none|
|»»» prev|null|true|none||none|
|»»» next|null|true|none||none|
|»» meta|object|true|none||none|
|»»» current_page|integer|true|none||none|
|»»» from|integer|true|none||none|
|»»» last_page|integer|true|none||none|
|»»» links|[object]|true|none||none|
|»»»» url|string¦null|true|none||none|
|»»»» label|string|true|none||none|
|»»»» active|boolean|true|none||none|
|»»» path|string|true|none||none|
|»»» per_page|integer|true|none||none|
|»»» to|integer|true|none||none|
|»»» total|integer|true|none||none|
|»» is_valid|boolean|true|none||none|
|» time|integer|true|none||none|

状态码 **403**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

状态码 **404**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 举报分享

POST /shares/{slug}/report

> Body 请求参数

```json
{
  "content": "满采生争经候信记毛保则水文其家。时年马品然事米该制收重复主与就增亲立。家结员南严基育真事给那条边。要石中数展格不志进面收带自置。白照毛没们提快气者做何手方采状清没。身教量着百制美素号引信得报无矿。成类任江成导近书会点据类力二加。"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|slug|path|string| 是 ||none|
|password|query|string| 是 ||密码|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|
|body|body|[ReportContent](#schemareportcontent)| 否 | 提交举报内容|none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1720427678
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## POST 点赞分享

POST /shares/{slug}/like

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|slug|path|string| 是 ||none|
|password|query|string| 是 ||密码|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "time": 1720427678
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» time|integer|true|none||none|

## DELETE 取消点赞分享

DELETE /shares/{slug}/unlike

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|slug|path|string| 是 ||none|
|password|query|string| 是 ||密码|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|Inline|

### 返回数据结构

# 公告

## GET 公告列表

GET /notices

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|page|query|integer| 否 ||页码|
|per_page|query|integer| 否 ||每页展示数量|
|q|query|string| 否 ||筛选关键字|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

```json
{
  "status": "success",
  "message": "successful",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "title": "Lsky Pro+ 2.0 发布",
        "content": "1231231231231231",
        "created_at": "2024-07-05T03:33:38.000000Z"
      }
    ],
    "first_page_url": "http://127.0.0.1:8000/api/v2/notices?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://127.0.0.1:8000/api/v2/notices?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; 上一页",
        "active": false
      },
      {
        "url": "http://127.0.0.1:8000/api/v2/notices?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "下一页 &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "http://127.0.0.1:8000/api/v2/notices",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  },
  "time": 1720163365
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» current_page|integer|true|none||none|
|»» data|[object]|true|none||none|
|»»» id|integer|false|none||公告ID|
|»»» title|string|false|none||标题|
|»»» content|string|false|none||内容，超出300个字符后以省略号结尾|
|»»» created_at|string|false|none||创建时间|
|»» first_page_url|string|true|none||none|
|»» from|integer|true|none||none|
|»» last_page|integer|true|none||none|
|»» last_page_url|string|true|none||none|
|»» links|[object]|true|none||none|
|»»» url|string¦null|true|none||none|
|»»» label|string|true|none||none|
|»»» active|boolean|true|none||none|
|»» next_page_url|null|true|none||none|
|»» path|string|true|none||none|
|»» per_page|integer|true|none||none|
|»» prev_page_url|null|true|none||none|
|»» to|integer|true|none||none|
|»» total|integer|true|none||none|
|» time|integer|true|none||none|

## GET 公告详情

GET /notices/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|integer| 是 ||公告ID|
|Accept|header|string| 否 ||none|
|X-XSRF-TOKEN|header|string| 否 ||none|
|Authorization|header|string| 否 ||none|

> 返回示例

> 200 Response

```json
{
  "status": "string",
  "message": "string",
  "data": {
    "id": 0,
    "title": "string",
    "content": "string",
    "created_at": "string"
  },
  "time": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» status|string|true|none||none|
|» message|string|true|none||none|
|» data|object|true|none||none|
|»» id|integer|true|none||公告ID|
|»» title|string|true|none||标题|
|»» content|string|true|none||内容(markdown)|
|»» created_at|string|true|none||创建时间|
|» time|integer|true|none||none|

# 数据模型

<h2 id="tocS_GroupInfo">GroupInfo</h2>

<a id="schemagroupinfo"></a>
<a id="schema_GroupInfo"></a>
<a id="tocSgroupinfo"></a>
<a id="tocsgroupinfo"></a>

```json
{
  "id": 0,
  "name": "string",
  "intro": "string",
  "is_default": true,
  "is_guest": true,
  "options": {
    "max_upload_size": 0,
    "file_expire_seconds": 0,
    "limit_concurrent_upload": 0,
    "limit_per_minute": 0,
    "limit_per_hour": 0,
    "limit_per_day": 0,
    "limit_per_week": 0,
    "limit_per_month": 0,
    "allow_file_types": [
      "string"
    ]
  }
}

```

角色组信息

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|true|none||角色组ID|
|name|string|true|none||名称|
|intro|string|true|none||简介|
|is_default|boolean|true|none||是否为系统默认组|
|is_guest|boolean|true|none||是否为系统游客组|
|options|object|true|none||组配置信息|
|» max_upload_size|integer|true|none||最大上传大小(kb)|
|» file_expire_seconds|integer|true|none||文件失效时间(秒)，失效后图片将会被删除，0为不限制|
|» limit_concurrent_upload|integer|true|none||同时上传的文件数量|
|» limit_per_minute|integer|true|none||一分钟内可上传的文件数量，0为不限制|
|» limit_per_hour|integer|true|none||一小时内可上传的文件数量，0为不限制|
|» limit_per_day|integer|true|none||一天内可上传的文件数量，0为不限制|
|» limit_per_week|integer|true|none||一周内可上传的文件数量，0为不限制|
|» limit_per_month|integer|true|none||一个月内可上传的文件数量，0为不限制|
|» allow_file_types|[string]|true|none||支持上传的文件拓展名|

<h2 id="tocS_PhotoList">PhotoList</h2>

<a id="schemaphotolist"></a>
<a id="schema_PhotoList"></a>
<a id="tocSphotolist"></a>
<a id="tocsphotolist"></a>

```json
{
  "id": 0,
  "name": "string",
  "intro": "string",
  "extension": "string",
  "width": 0,
  "height": 0,
  "is_liked": true,
  "thumbnail_url": "string",
  "public_url": "string"
}

```

图片列表

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|false|none||图片ID|
|name|string|false|none||名称|
|intro|string|false|none||简介|
|extension|string|false|none||拓展名|
|width|integer|false|none||宽度|
|height|integer|false|none||高度|
|is_liked|boolean|false|none||当前用户是否点赞了|
|thumbnail_url|string|false|none||缩略图链接|
|public_url|string|false|none||图片链接|

<h2 id="tocS_ReportContent">ReportContent</h2>

<a id="schemareportcontent"></a>
<a id="schema_ReportContent"></a>
<a id="tocSreportcontent"></a>
<a id="tocsreportcontent"></a>

```json
{
  "content": "string"
}

```

提交举报内容

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|content|string|true|none||举报内容|

<h2 id="tocS_AlbumList">AlbumList</h2>

<a id="schemaalbumlist"></a>
<a id="schema_AlbumList"></a>
<a id="tocSalbumlist"></a>
<a id="tocsalbumlist"></a>

```json
{
  "id": 0,
  "name": "string",
  "intro": "string",
  "created_at": "string",
  "photo_count": 0,
  "covers": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}

```

相册列表

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer|false|none||相册ID|
|name|string|false|none||名称|
|intro|string|false|none||简介|
|created_at|string|false|none||创建时间|
|photo_count|integer|false|none||图片数量|
|covers|[string]|false|none||封面图片，最多三张|
|tags|[object]|false|none||标签|
|» id|integer|false|none||标签ID|
|» name|string|false|none||标签名称|

