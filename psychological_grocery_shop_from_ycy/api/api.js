import api from './request'

export const getArticleByPage = (pageno, pageItems) => {
    // return api.get(`article/page/${pageno}/${pageItems}`)
    let mockData = {
        "total_items": 14, "pages": 2, "page_no": "1", "page_items": "7",
        "rows": [{ "id": 10056, "title": "超越在美丽的四川稻城亚丁录制《哈哈农夫》", "date": "2019-04-14T04:49:36.000Z" },
        { "id": 10057, "title": "恭喜杨超越获得第三名", "date": "2019-04-13T05:34:09.000Z" },
        { "id": 10058, "title": "谢谢你的善良，善良是可以保护自己的武器", "date": "2019-04-12T05:39:55.000Z" },
        { "id": 10059, "title": "超越正式成为AHC 全球品牌代言人", "date": "2019-04-11T05:44:44.000Z" },
        { "id": 10060, "title": "超越蛰伏了一周终于又发微博了", "date": "2019-04-10T05:45:46.000Z" },
        { "id": 10061, "title": "越越又发视频了，戴上墨镜你就是全村最靓的仔", "date": "2019-04-09T05:46:06.000Z" },
        { "id": 10062, "title": "超越不在的日子是不是很想她，养超越吧", "date": "2019-04-08T05:46:42.000Z" }]
    }
    mockData.page_no = pageno;
    return Promise.resolve(mockData);
}

export const getArticleById = (id) => {
    // return api.get(`article/${id}`)
    let mockData = {
        content: "<div class='RichText ztext Post-RichText'>\r\n   <p><b>一 超越动态</b></p>\r\n    <p>今天的超越在美丽的四川稻城亚丁录制《哈哈农夫》，感谢各位站姐站哥的跟拍，各类照片请见“杨超越新鲜事”</p><p><b>二 超越资讯</b></p>\r\n    <p>在4月13日，超越杯编程大赛初赛结果公布，这个引起了广泛关注的比赛开始进入新的比赛阶段，也有人对这次比赛的初赛结果给出了自己的解读，为大家找来一篇《杨超越‘拯救’独立游戏》。</p>\r\n    </div>"
    }
    return Promise.resolve(mockData);
}

