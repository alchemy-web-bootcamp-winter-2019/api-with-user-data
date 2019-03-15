//api request for the below info
//https://waterservices.usgs.gov/nwis/iv/?format=json&sites=14301000&parameterCd=00060,00065&siteType=ST&siteStatus=all

export default 
{
    "sourceInfo": {
        "siteName": "DESCHUTES RIVER NEAR MADRAS, OR",
        "siteCode": [
            {
                "value": "14092500",
                "network": "NWIS",
                "agencyCode": "USGS"
            }
        ],
        "timeZoneInfo": {
            "defaultTimeZone": {
                "zoneOffset": "-08:00",
                "zoneAbbreviation": "PST"
            },
            "daylightSavingsTimeZone": {
                "zoneOffset": "-07:00",
                "zoneAbbreviation": "PDT"
            },
            "siteUsesDaylightSavingsTime": true
        },
        "geoLocation": {
            "geogLocation": {
                "srs": "EPSG:4326",
                "latitude": 44.72595225,
                "longitude": -121.2469939
            },
            "localSiteXY": []
        },
        "note": [],
        "siteType": [],
        "siteProperty": [
            {
                "value": "ST",
                "name": "siteTypeCd"
            },
            {
                "value": "17070306",
                "name": "hucCd"
            },
            {
                "value": "41",
                "name": "stateCd"
            },
            {
                "value": "41031",
                "name": "countyCd"
            }
        ]
    },
    "variable": {
        "variableCode": [
            {
                "value": "00010",
                "network": "NWIS",
                "vocabulary": "NWIS:UnitValues",
                "variableID": 45807042,
                "default": true
            }
        ],
        "variableName": "Temperature, water, &#176;C",
        "variableDescription": "Temperature, water, degrees Celsius",
        "valueType": "Derived Value",
        "unit": {
            "unitCode": "deg C"
        },
        "options": {
            "option": [
                {
                    "name": "Statistic",
                    "optionCode": "00000"
                }
            ]
        },
        "note": [],
        "noDataValue": -999999,
        "variableProperty": [],
        "oid": "45807042"
    },
    "values": [
        {
            "value": [
                {
                    "value": "6.3",
                    "qualifiers": [
                        "P"
                    ],
                    "dateTime": "2019-03-10T12:00:00.000-07:00"
                }
            ],
            "qualifier": [
                {
                    "qualifierCode": "P",
                    "qualifierDescription": "Provisional data subject to revision.",
                    "qualifierID": 0,
                    "network": "NWIS",
                    "vocabulary": "uv_rmk_cd"
                }
            ],
            "qualityControlLevel": [],
            "method": [
                {
                    "methodDescription": "",
                    "methodID": 116731
                }
            ],
            "source": [],
            "offset": [],
            "sample": [],
            "censorCode": []
        }
    ],
    "name": "USGS:14092500:00010:00000"
};
   

export const fetchBody =

{
    "name": "ns1:timeSeriesResponseType",
    "declaredType": "org.cuahsi.waterml.TimeSeriesResponseType",
    "scope": "javax.xml.bind.JAXBElement$GlobalScope",
    "value": {
        "queryInfo": {
            "queryURL": "http://waterservices.usgs.gov/nwis/iv/format=json&sites=14301000%2C14092500&parameterCd=00060%2C00065%2C00010&siteType=ST&siteStatus=all",
            "criteria": {
                "locationParam": "[ALL:14301000, ALL:14092500]",
                "variableParam": "[00060, 00065, 00010]",
                "parameter": []
            },
            "note": [
                {
                    "value": "[ALL:14301000, ALL:14092500]",
                    "title": "filter:sites"
                },
                {
                    "value": "[ST]",
                    "title": "filter:siteType"
                },
                {
                    "value": "[mode=LATEST, modifiedSince=null]",
                    "title": "filter:timeRange"
                },
                {
                    "value": "methodIds=[ALL]",
                    "title": "filter:methodId"
                },
                {
                    "value": "2019-03-10T20:52:14.573Z",
                    "title": "requestDT"
                },
                {
                    "value": "6249dac0-4376-11e9-84d1-6cae8b6642ea",
                    "title": "requestId"
                },
                {
                    "value": "Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.",
                    "title": "disclaimer"
                },
                {
                    "value": "sdas01",
                    "title": "server"
                }
            ]
        },
        "timeSeries": [
            {
                "sourceInfo": {
                    "siteName": "DESCHUTES RIVER NEAR MADRAS, OR",
                    "siteCode": [
                        {
                            "value": "14092500",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-08:00",
                            "zoneAbbreviation": "PST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-07:00",
                            "zoneAbbreviation": "PDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 44.72595225,
                            "longitude": -121.2469939
                        },
                        "localSiteXY": []
                    },
                    "note": [],
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "name": "siteTypeCd"
                        },
                        {
                            "value": "17070306",
                            "name": "hucCd"
                        },
                        {
                            "value": "41",
                            "name": "stateCd"
                        },
                        {
                            "value": "41031",
                            "name": "countyCd"
                        }
                    ]
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00010",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807042,
                            "default": true
                        }
                    ],
                    "variableName": "Temperature, water, &#176;C",
                    "variableDescription": "Temperature, water, degrees Celsius",
                    "valueType": "Derived Value",
                    "unit": {
                        "unitCode": "deg C"
                    },
                    "options": {
                        "option": [
                            {
                                "name": "Statistic",
                                "optionCode": "00000"
                            }
                        ]
                    },
                    "note": [],
                    "noDataValue": -999999,
                    "variableProperty": [],
                    "oid": "45807042"
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "6.3",
                                "qualifiers": [
                                    "P"
                                ],
                                "dateTime": "2019-03-10T13:00:00.000-07:00"
                            }
                        ],
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd"
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodDescription": "",
                                "methodID": 116731
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:14092500:00010:00000"
            },
            {
                "sourceInfo": {
                    "siteName": "DESCHUTES RIVER NEAR MADRAS, OR",
                    "siteCode": [
                        {
                            "value": "14092500",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-08:00",
                            "zoneAbbreviation": "PST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-07:00",
                            "zoneAbbreviation": "PDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 44.72595225,
                            "longitude": -121.2469939
                        },
                        "localSiteXY": []
                    },
                    "note": [],
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "name": "siteTypeCd"
                        },
                        {
                            "value": "17070306",
                            "name": "hucCd"
                        },
                        {
                            "value": "41",
                            "name": "stateCd"
                        },
                        {
                            "value": "41031",
                            "name": "countyCd"
                        }
                    ]
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197,
                            "default": true
                        }
                    ],
                    "variableName": "Streamflow, ft&#179;/s",
                    "variableDescription": "Discharge, cubic feet per second",
                    "valueType": "Derived Value",
                    "unit": {
                        "unitCode": "ft3/s"
                    },
                    "options": {
                        "option": [
                            {
                                "name": "Statistic",
                                "optionCode": "00000"
                            }
                        ]
                    },
                    "note": [],
                    "noDataValue": -999999,
                    "variableProperty": [],
                    "oid": "45807197"
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "4430",
                                "qualifiers": [
                                    "P"
                                ],
                                "dateTime": "2019-03-10T13:00:00.000-07:00"
                            }
                        ],
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd"
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodDescription": "",
                                "methodID": 116732
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:14092500:00060:00000"
            },
            {
                "sourceInfo": {
                    "siteName": "DESCHUTES RIVER NEAR MADRAS, OR",
                    "siteCode": [
                        {
                            "value": "14092500",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-08:00",
                            "zoneAbbreviation": "PST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-07:00",
                            "zoneAbbreviation": "PDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 44.72595225,
                            "longitude": -121.2469939
                        },
                        "localSiteXY": []
                    },
                    "note": [],
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "name": "siteTypeCd"
                        },
                        {
                            "value": "17070306",
                            "name": "hucCd"
                        },
                        {
                            "value": "41",
                            "name": "stateCd"
                        },
                        {
                            "value": "41031",
                            "name": "countyCd"
                        }
                    ]
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00065",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807202,
                            "default": true
                        }
                    ],
                    "variableName": "Gage height, ft",
                    "variableDescription": "Gage height, feet",
                    "valueType": "Derived Value",
                    "unit": {
                        "unitCode": "ft"
                    },
                    "options": {
                        "option": [
                            {
                                "name": "Statistic",
                                "optionCode": "00000"
                            }
                        ]
                    },
                    "note": [],
                    "noDataValue": -999999,
                    "variableProperty": [],
                    "oid": "45807202"
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "2.96",
                                "qualifiers": [
                                    "P"
                                ],
                                "dateTime": "2019-03-10T13:00:00.000-07:00"
                            }
                        ],
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd"
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodDescription": "",
                                "methodID": 116733
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:14092500:00065:00000"
            },
            {
                "sourceInfo": {
                    "siteName": "NEHALEM RIVER NEAR FOSS, OR",
                    "siteCode": [
                        {
                            "value": "14301000",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-08:00",
                            "zoneAbbreviation": "PST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-07:00",
                            "zoneAbbreviation": "PDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 45.7039986,
                            "longitude": -123.755405
                        },
                        "localSiteXY": []
                    },
                    "note": [],
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "name": "siteTypeCd"
                        },
                        {
                            "value": "17100202",
                            "name": "hucCd"
                        },
                        {
                            "value": "41",
                            "name": "stateCd"
                        },
                        {
                            "value": "41057",
                            "name": "countyCd"
                        }
                    ]
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00060",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807197,
                            "default": true
                        }
                    ],
                    "variableName": "Streamflow, ft&#179;/s",
                    "variableDescription": "Discharge, cubic feet per second",
                    "valueType": "Derived Value",
                    "unit": {
                        "unitCode": "ft3/s"
                    },
                    "options": {
                        "option": [
                            {
                                "name": "Statistic",
                                "optionCode": "00000"
                            }
                        ]
                    },
                    "note": [],
                    "noDataValue": -999999,
                    "variableProperty": [],
                    "oid": "45807197"
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "1230",
                                "qualifiers": [
                                    "P"
                                ],
                                "dateTime": "2019-03-10T13:15:00.000-07:00"
                            }
                        ],
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd"
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodDescription": "",
                                "methodID": 117381
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:14301000:00060:00000"
            },
            {
                "sourceInfo": {
                    "siteName": "NEHALEM RIVER NEAR FOSS, OR",
                    "siteCode": [
                        {
                            "value": "14301000",
                            "network": "NWIS",
                            "agencyCode": "USGS"
                        }
                    ],
                    "timeZoneInfo": {
                        "defaultTimeZone": {
                            "zoneOffset": "-08:00",
                            "zoneAbbreviation": "PST"
                        },
                        "daylightSavingsTimeZone": {
                            "zoneOffset": "-07:00",
                            "zoneAbbreviation": "PDT"
                        },
                        "siteUsesDaylightSavingsTime": true
                    },
                    "geoLocation": {
                        "geogLocation": {
                            "srs": "EPSG:4326",
                            "latitude": 45.7039986,
                            "longitude": -123.755405
                        },
                        "localSiteXY": []
                    },
                    "note": [],
                    "siteType": [],
                    "siteProperty": [
                        {
                            "value": "ST",
                            "name": "siteTypeCd"
                        },
                        {
                            "value": "17100202",
                            "name": "hucCd"
                        },
                        {
                            "value": "41",
                            "name": "stateCd"
                        },
                        {
                            "value": "41057",
                            "name": "countyCd"
                        }
                    ]
                },
                "variable": {
                    "variableCode": [
                        {
                            "value": "00065",
                            "network": "NWIS",
                            "vocabulary": "NWIS:UnitValues",
                            "variableID": 45807202,
                            "default": true
                        }
                    ],
                    "variableName": "Gage height, ft",
                    "variableDescription": "Gage height, feet",
                    "valueType": "Derived Value",
                    "unit": {
                        "unitCode": "ft"
                    },
                    "options": {
                        "option": [
                            {
                                "name": "Statistic",
                                "optionCode": "00000"
                            }
                        ]
                    },
                    "note": [],
                    "noDataValue": -999999,
                    "variableProperty": [],
                    "oid": "45807202"
                },
                "values": [
                    {
                        "value": [
                            {
                                "value": "5.13",
                                "qualifiers": [
                                    "P"
                                ],
                                "dateTime": "2019-03-10T13:15:00.000-07:00"
                            }
                        ],
                        "qualifier": [
                            {
                                "qualifierCode": "P",
                                "qualifierDescription": "Provisional data subject to revision.",
                                "qualifierID": 0,
                                "network": "NWIS",
                                "vocabulary": "uv_rmk_cd"
                            }
                        ],
                        "qualityControlLevel": [],
                        "method": [
                            {
                                "methodDescription": "",
                                "methodID": 117382
                            }
                        ],
                        "source": [],
                        "offset": [],
                        "sample": [],
                        "censorCode": []
                    }
                ],
                "name": "USGS:14301000:00065:00000"
            }
        ]
    },
    "nil": false,
    "globalScope": true,
    "typeSubstituted": false
};

