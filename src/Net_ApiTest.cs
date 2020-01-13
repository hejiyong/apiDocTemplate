using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace TestConsole.TestItem
{
    /**
    * 接口测试类
    */
    public class ApiTest 
    {

        /**
         * 用户名称
         */
        public string UserName { get; set; }

        /**
         * 密码
         */
        public string pwd { get; set; }

        /**
         * 接口测试执行方法
         */
        public void RunTest()
        {

            Console.WriteLine("接口测试");
        }

        /**
		 * @api {get} /login C#接口测试
		 * @apiDescription C#测试接口
		 * @apiGroup .Net
		 *
		 * @apiParam {String} name 登录用户名
		 * @apiParam {Number} [pwd] 登录密码
		 *
		 * @apiParamExample {string} 请求参数格式:
		 *    ?name=demo000&pwd=123456
		 *
		 * @apiVersion 1.0.0
		 * @apiErrorExample {json} 错误返回值:
		 *     {
		 *        "code": 10003,
		 *        "msg": "账号名密码错误!",
		 *        "status": "fail"
		 *     }
		 * @apiSuccessExample {json} 正确返回值:
		 *     {
		 *   "code": 0,
		 *   "msg": "登录成功",
		 *   "status": "1",
		 *   }
		 */
        public string login(string name , string pwd)
        {
            return "";
        }
		
		
		
        /**
		 * @api {get} /getUserInfo 获取用户信息
		 * @apiDescription 获取用户信息
		 * @apiGroup .Net
		 *
		 * @apiParam {String} Token 登录用户令牌
		 *
		 * @apiParamExample {string} 请求参数格式:
		 *    ?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
		 *
		 * @apiVersion 1.0.0
		 * @apiErrorExample {json} 错误返回值:
		 *     {
		 *        "code": 10003,
		 *        "msg": "令牌验证异常!", 
		 *        "status": "fail"
		 *     }
		 * @apiSuccessExample {json} 正确返回值:
		 *     {
		 *   "code": 0,
		 *   "msg": "获取数据成功",,
		 * 	 "data": { "username":"123456" }		 
		 *   "status": "1",
		 *   }
		 */
        public string getUserInfo(string name , string pwd)
        {
            return "";
        }
    }
}
