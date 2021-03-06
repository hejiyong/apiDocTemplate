define({ "api": [
  {
    "type": "get",
    "url": "/test",
    "title": "接口测试",
    "description": "<p>根据ID（id）获取列表信息</p>",
    "group": "Java",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perpage",
            "description": "<p>每页的条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?id=123&page=1&perpage=20",
          "type": "string"
        }
      ]
    },
    "version": "1.0.0",
    "error": {
      "examples": [
        {
          "title": "错误返回值:",
          "content": "{\n   \"code\": 10003,\n   \"msg\": \"ParametersError [Method]:get_tests参数错误!\",\n   \"error\": {\n       \"id\": \"\",\n       \"page\": \"\",\n       \"perpage\": \"\"\n   },\n  \"status\": \"fail\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "正确返回值:",
          "content": "  {\n\"code\": 0,\n\"msg\": \"OK \",\n\"data\": [\n    {\n        \"id\": \"622051004185471233\",\n        \"testCode\": \"000050\",\n    }\n],\n\"status\": \"ok\",\n\"count\": \"14\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Jave_ApiTest.java",
    "groupTitle": "Java",
    "name": "GetTest",
    "sampleRequest": [
      {
        "url": "http://localhost:9220/sapi/v1/production_plan/test"
      }
    ]
  },
  {
    "type": "get",
    "url": "/getUserInfo",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "group": "_Net",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>登录用户令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          "type": "string"
        }
      ]
    },
    "version": "1.0.0",
    "error": {
      "examples": [
        {
          "title": "错误返回值:",
          "content": "{\n   \"code\": 10003,\n   \"msg\": \"令牌验证异常!\", \n   \"status\": \"fail\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "正确返回值:",
          "content": "    {\n  \"code\": 0,\n  \"msg\": \"获取数据成功\",,\n\t \"data\": { \"username\":\"123456\" }\t\t \n  \"status\": \"1\",\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/Net_ApiTest.cs",
    "groupTitle": "_Net",
    "name": "GetGetuserinfo",
    "sampleRequest": [
      {
        "url": "http://localhost:9220/sapi/v1/production_plan/getUserInfo"
      }
    ]
  },
  {
    "type": "get",
    "url": "/login",
    "title": "C#接口测试",
    "description": "<p>C#测试接口</p>",
    "group": "_Net",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>登录用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pwd",
            "description": "<p>登录密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求参数格式:",
          "content": "?name=demo000&pwd=123456",
          "type": "string"
        }
      ]
    },
    "version": "1.0.0",
    "error": {
      "examples": [
        {
          "title": "错误返回值:",
          "content": "{\n   \"code\": 10003,\n   \"msg\": \"账号名密码错误!\",\n   \"status\": \"fail\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "正确返回值:",
          "content": "  {\n\"code\": 0,\n\"msg\": \"登录成功\",\n\"status\": \"1\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/Net_ApiTest.cs",
    "groupTitle": "_Net",
    "name": "GetLogin",
    "sampleRequest": [
      {
        "url": "http://localhost:9220/sapi/v1/production_plan/login"
      }
    ]
  }
] });
