// pages/game/game.js
var app = getApp();
function two_char(n) {
  return n >= 10 ? n : "0" + n;
}
var sec = 0;
var times = 0;
var numbers = 0;
var n=1
Page({
  /**
   * 页面的初始数据
   */
  data: {
    si: '',
    questions: ['在新的历史条件下，我们党面临着执政、改革开放、（）、外部环境“四大考验”。',
      '党的十九大报告中提出的要全面加强党的“五大建设”是（）',
      '党的十九大强调，要全面加强党的政治建设、思想建设、组织建设、作风建设、纪律建设，增强（）、自我完善、自我革新、自我提高能力。',
      '为人民服务是党的根本宗旨，以人为本、（）是检验党一切执政活动的最高标准。',
      '中国共产党以马克思列宁主义、毛泽东思想、邓小平理论、“三个代表”重要思想、科学发展观，（）作为自己的行动指南。',
      '党的各级纪律检查委员会是党内（）专责机关。',
      '（）是党内最高处分。',
      '党员受到警告处分后的（）内，不得在党内提升职务和向党外组织推荐担任高于原任职务的党外职务。',
      '党章规定的各项纪律都必须严格遵守和执行，而最首要、最核心的就是要严格遵守和执行党的（）。',
      '对党的中央委员会和地方各级委员会的委员、候补委员，给以撤销党内职务、留党察看或开除党籍的处分，必须由本人所在的委员会全体会议（）以上的多数决定。',
      '对党的纪律处分必须经过支部大会讨论决定，报党的 （）批准。',
      '对因用人方面问题受到责令辞职、免职、降职等组织处理的，（）内不得提拔。',
      '党的（）纪律是密切党与群众血肉联系的重要保证。',
      '（）是马克思主义政党的基本政治观点和根本工作路线。',
      '党的最高理想和最终目标是（） 。',
      '党的各级代表大会由（）党的委员会召集。',
      '党的根本宗旨是（） 。',
      '始终做到“三个代表’，是我们党的立党之本、执政之基、（） 。',
      '在现阶段，我国社会的 （）是人民人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。',
      '中国共产党第十九次全国代表大会，是在全面建成小康社会决胜阶段、中国特色社会主义进入（）的关键时期召开的一次十分重要的大会。',
      '中国共产党人的初心和使命，就是为中国人民（），为中华民族（）。这个初心和使命是激励中国共产党人不断前进的根本动力。',
      '五年来，我们统筹推进“（）”总体布局、协调推进“”战略布局，“十二五”规划胜利完成，“十三五”规划顺利实施，党和国家事业全面开创新局面。',
      '坚持反腐败无禁区、全覆盖、零容忍，坚定不移“打虎”、“拍蝇”、“猎狐”，（）的目标初步实现，（）的笼子越扎越牢， （）的堤坝正在构筑，反腐败斗争压倒性态势已经形成并巩固发展。',
      '经过长期努力，中国特色社会主义进入了新时代，这是我国发展新的（）。',
      '必须认识到，我国社会主要矛盾的变化，没有改变我们对我国社会主义所处历史阶段的判断，我国仍处于并将长期处于（     ）的基本国情没有变，我国是世界最大发展中国家的国际地位没有变。',
      '（    ）是实现社会主义现代化、创造人民美好生活的必由之路。',
      '（）是指导党和人民实现中华民族伟大复兴的正确理论。',
      '（）是当代中国发展进步的根本制度保障。',
      '（）是激励全党全国各族人民奋勇前进的强大精神力量。',
      '新时代中国特色社会主义思想，明确坚持和发展中国特色社会主义，总任务是实现社会主义现代化和中华民族伟大复兴，在全面建成小康社会的基础上，分（     ）在本世纪中叶建成富强民主文明和谐美丽的社会主义现代化强国。',
      '新时代中国特色社会主义思想，明确中国特色社会主义最本质的特征是（    ） 。',
      '发展是解决我国一切问题的基础和关键，发展必须是科学发展，必须坚定不移贯彻（     ）的发展理念。',
      '（    ）是中国特色社会主义的本质要求和重要保障。',
      '（    ）是一个国家、一个民族发展中更基本、更深沉、更持久的力量。',
      '必须统筹国内国际两个大局，始终不渝走和平发展道路、奉行（    ）的开放战略。',
      '从现在到二〇二〇年，是全面建成小康社会（    ）。',
      '从 （   ）到（   ），是“两个一百年”奋斗目标的历史交汇期。',
      '从全面建成小康社会到基本实现现代化，再到全面建成（    ） ，是新时代中国特色社会主义发展的战略安排。',
      '实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦，不断提高人民生活水平，必须坚定不移把（    ）作为党执政兴国的第一要务。',
      '我国经济已由（    ）阶段转向（    ）阶段，正处在转变发展方式、优化经济结构、转换增长动力的攻关期，建设现代化经济体系是跨越关口的迫切要求和我国发展的战略目标。',
      '贯彻新发展理念，建设现代化经济体系，必须坚持质量第一、效益优先，以（    ）为主线。',
      '（   ）是引领发展的第一动力，是建设现代化经济体系的战略支撑。',
      '赋予自由贸易试验区更大改革自主权，探索建设（    ）。',
      '坚持党的领导、人民当家作主、依法治国有机统一。（   ）是社会主义民主政治的本质特征。',
      '加强人民当家作主制度保障。（    ）是坚持党的领导、人民当家作主、依法治国有机统一的根本政治制度安排。',
      '发挥社会主义协商民主重要作用。（    ）是具有中国特色的制度安排，是社会主义协商民主的重要渠道和专门协商机构。',
      '深化依法治国实践。成立中央全面（    ）领导小组，加强对法治中国建设的统一领导。',
      '深化机构和行政体制改革。转变政府职能，深化简政放权，创新监管方式，增强政府公信力和执行力，建设人民满意的（   ）政府。',
      '全党必须牢记，（   ）的问题，是检验一个政党、一个政权性质的试金石。',
      '建设（   ）是中华民族伟大复兴的基础工程。'],


    questionsA: ['A、商品经济', 'A、思想建设、组织建设、作风建设、文化建设和制度建设', 'A、自我监督', 'A、执政为民', 'A. 习近平新时代中国特色社会主义思想', 'A.监督', 'A.留党察看', 'A、半年', 'A、政治纪律', 'A.二分之一', 'A.上级委员会', 'A、半年', 'A、政治', 'A、实事求是', 'A、实现共产主义', 'A.同级', 'A、人民的利益高于一切', 'A、凝聚之源', 'A、主要问题', 'A.新时期', 'A.谋幸福，谋未来', 'A.五位一体 四个全面',
      'A.不敢腐 不能腐 不想腐',
      'A.未来方向',
      'A.社会主义阶段',
      'A.中国特色社会主义道路',
      'A.中国特色社会主义道路',
      'A.中国特色社会主义道路',
      'A.中国特色社会主义道路',
      'A.两步走',
      'A.“五位一体”总体布局 ',
      'A.创新、协调、绿色、开放、共享',
      'A.全面依法治国',
      'A.道路自信 ',
      'A.互利共赢',
      'A. 决战期',
      'A.二〇二〇年 二〇三五年',
      'A.创新型国家',
      'A.创新',
      'A.高速增长 高水平发展',
      'A.转变发展方式',
      'A.改革',
      'A.自由贸易城',
      'A.党的领导',
      'A.人民代表大会制度',
      'A.政党协商',
      'A.深化改革',
      'A.法治',
      'A.为什么人',
      'A.经济强国',],
    questionsB: [
      'B、内部环境', 'B、思想建设、组织建设、文化建设、反腐倡廉建设和制度建设', 'B、自我净化', 'B、依靠人民', 'B. 习近平新时代中国特色社会主义战略', 'B.检查', 'B.撤销党内职务', 'B、一年', 'B、组织纪律', 'B.三分之二', 'B.下级委员会', 'B、一年', 'B、组织', 'B、改革创新', 'B、建设中国特色社会主义', 'B.上级', 'B、毫不利己，专门利人', 'B、力量之源', 'B、基本矛盾', 'B.新阶段', 'B.谋生活，谋复兴', 'B.四位一体 五个全面',
      'B.不能腐 不敢腐 不想腐',
      'B.未来方位',
      'B.社会主义初级阶段',
      'B.中国特色社会主义理论体系',
      'B.中国特色社会主义理论体系',
      'B.中国特色社会主义理论体系',
      'B.中国特色社会主义理论体系',
      'B.三步走',
      'B.建设中国特色社会主义法治体系',
      'B.创造、协调、生态、开放、共享',
      'B.全面从严治党',
      'B.理论自信 ',
      'B.互相合作',
      'B. 决胜期',
      'B.十九大 二十大',
      'B.社会主义现代化强国',
      'B.改革',
      'B.高速发展 高水平发展',
      'B.优化经济结构',
      'B.创新',
      'B.自由贸易区',
      'B.人民当家作主',
      'B.多党合作和政治协商制度',
      'B.人大协商',
      'B.依法治国',
      'B.创新型',
      'B.执政宗旨',
      'B.政治强国'
      ],
    questionsC: ['C、市场经济', 'C、政治建设、思想建设、组织建设、作风建设和纪律建设', 'C、自我管理', 'C、加快发展', 'C. 习近平新时代中国特色社会主义理念', 'C.监察', 'C.严重警告', 'C、两年', 'C、经济工作纪律 ', 'C.四分之三', 'C.支部委员会', 'C、两年', 'C、经济工作', 'C、群众路线', ' C、建设富强、民主、文明的社会主义现代化强国', ' C.下级', 'C、全心全意为人民服务', 'C、发展之源', 'C、主要矛盾', 'C.新征程', 'C.谋幸福，谋复兴', 'C.五个全面 四位一体',
    'C.不想腐 不敢腐 不能腐',
      'C.历史方向',
      'C.社会主义中级阶段',
      'C.中国特色社会主义制度',
      'C.中国特色社会主义制度',
      'C.中国特色社会主义制度',
      'C.中国特色社会主义制度',
      'C.四步走',
      'C.人民利益为根本出发点',
      'C.创新、统筹、绿色、开放、共享',
      'C.全面发展经济',
      'C.制度自信',
      'C.包容互信',
      'C. 关键期',
      'C.二十大 二十一大',
      'C.社会主义现代化大国',
      'C.发展',
      'C.高速增长 高质量发展',
      'C.供给侧结构性改革',
      'C.开放',
      'C.自由贸易港',
      'C.依法治国',
      'C.民族区域自治制度',
      'C.基层协商',
      'C.从严治党',
      'C.廉洁',
      'C.建党宗旨',
      'C.教育强国'
      ],
    questionsD: [
      'D、执政能力',
      'D、政治建设、思想建设、组织建设、反腐倡廉建设和纪律',
      'D、自我要求',
      'D、造福于民',
      'D. 习近平治国理政新方针',
      'D.检察',
      'D.开除党籍',
      'D、三年',
      'D、群众工作纪律',
      'D.五分之四',
      'D.基层委员会',
      'D、三年',
      'D、群众工作',
      'D、解放思想',
      'D、实现世界强国',
      'D.地方',
      'D、解放思想、实事求是',
      'D、强国之源',
      'D、根本矛盾',
      'D.新时代',
      'D.谋生活，谋未来',
      'D.四个全面 五位一体',
      'D.不敢腐 不想腐 不能腐',
      'D.历史方位',
      'D.社会主义高级阶段',
      'D.中国特色社会主义文化',
      'D.中国特色社会主义文化',
      'D.中国特色社会主义文化',
      'D.中国特色社会主义文化',
      'D.五步走',
      'D.中国共产党领导',
      'D.创造、统筹、生态、开放、共享',
      'D.全面可持续发展',
      'D.文化自信',
      'D.开放共赢',
      'D. 攻坚期',
      'D.二〇三五年 本世纪中叶',
      'D.世界一流强国',
      'D.开放',
      'D.高速发展 高质量发展',
      'D.转换增长动力',
      'D.科技',
      'D.自由贸易市',
      'D.政治体制改革',
      'D.基层群众自治制度',
      'D.人民政协',
      'D.司法改革',
      'D.服务型',
      'D.权力来源',
      'D.文化强国'
      ],
    answer: [
      'C', 'C', 'B', 'A', 'A', 'A', 'D', 'B', 'A', 'B', 'D', 'C', 'D', 'C', 'A', 'A', 'C', 'B', 'C', 'D', 'C', 'A', 'A', 'D', 'B', 'A', 'B', 'C', 'D', 'A', 'D', 'A', 'A', 'D', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'B', 'C', 'B', 'A', 'D', 'B', 'D', 'A', 'C'

    ],
    questionbody: '',
    A: '',
    B: '',
    C: '',
    D: '',
    Ans: '',
    show: '',
    countj: true,
    bindcount: 0,
    errorcount: 0,
    rightcount: 0,
    count: 0,
    time: '',
    index: '',
  },

  /*设置计数器5分钟*/
  onLoad: function (options) {
    console.log("onLoad -----")
    var that = this;
    this.data.si = setInterval(function () {
      sec++;
      that.setData({
        time: sec,
         num: n
      })
      /*
        if (sec > 0) {
          sec--;
          times++;
          var date = new Date(0, 0)
          date.setSeconds(sec);
          var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
          that.setData({
            time: two_char(h) + ":" + two_char(m) + ":" + two_char(s)
          })
        }
        else {
          var count = that.data.count;
          if (that.data.bindcount == 0) {
            wx.showModal({
              title: '提示：',
              showCancel: false,
              content: '您还未答题，请重新作答',
              success: function () {
                wx.switchTab({
                  url: '/pages/index/index',
                })
              }
            })
            clearInterval(si);
          }
          else {
            clearInterval(si);
            app.globalData.bindcount = that.data.bindcount;
            app.globalData.errorcount = that.data.errorcount;
            app.globalData.rightcount = that.data.rightcount;
            wx.redirectTo({
              url: '/pages/top/top/?count=' + count,
            })
          }
  
        }
        */
    }, 1000);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.refresh();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // clearInterval(this.data.si)
    clearInterval(this.data.si);
    sec = 0;
    times = 0;
    numbers = 0;
    n=1;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  refresh: function () {
    var that = this;
    var questions = that.data.questions;
    var questionsA = that.data.questionsA;
    var questionsB = that.data.questionsB;
    var questionsC = that.data.questionsC;
    var questionsD = that.data.questionsD;
    var answer = that.data.answer;
    var index = Math.floor(Math.random() * (questions.length - 1));
    if (questions.length > 0) {
      this.setData({
        questionbody: questions.splice(index, 1),
        A: questionsA.splice(index, 1),
        B: questionsB.splice(index, 1),
        C: questionsC.splice(index, 1),
        D: questionsD.splice(index, 1),
        Ans: answer.splice(index, 1),
        questions: questions,
        questionsA: questionsA,
        questionsB: questionsB,
        questionsC: questionsC,
        questionsD: questionsD,
        answer: answer,
        index: index,
        show: '',
        countj: true,
      })
    }
    else {
      wx.showModal({
        title: '温馨提示，题目已经答完',
        content: '接下来清填写您的信息',
        success: res => {
          app.globalData.count = this.data.count;
          if (res.confirm) {
            wx.navigateTo({
              url: '../message/message?count=' + this.data.count
            })
          }
          else if (res.cancel) {
            console.log('用户点击取消')
          }

        }
      })
    }
  },
  disp: function (e) {

    var id = e.currentTarget.id;
    var num = e.currentTarget.dataset.num;
    var count = e.currentTarget.dataset.count;
    var bindcount = e.currentTarget.dataset.bindcount;
    var rightcount = e.currentTarget.dataset.rightcount;
    var errorcount = e.currentTarget.dataset.errorcount;
    if (this.data.countj) {
      if (id == num) {
        numbers++;
        
        this.setData({
          num:n
        })
        
        console.log("题目数: " + numbers)
        this.setData({
          show: '正确！',
          count: count + 5,
          countj: false,
          bindcount: bindcount + 1,
          rightcount: rightcount + 1,
         
        })
        n++;
        if (numbers == 10) {
          n=1;
          clearInterval(this.data.si);

          wx.navigateTo({
            url: '../message/message?sec=' + sec,
          })
          sec = 0;
          times = 0;
          numbers = 0;
        }
        this.refresh()
      }
      else {
       n=1;
        clearInterval(this.data.si);
        sec = 0;
        times = 0;
        numbers = 0;
        this.setData({
          show: '错误！' + '答案：' + num,
          count: count - 2,
          countj: false,
          bindcount: bindcount + 1,
          errorcount: errorcount + 1,


        })
        wx.showModal({
          title: '答错了！',
          content: '没有连续对10题，请重新答题',
          success: res => {
            if (res.confirm) {
              wx.switchTab({
                url: '../zixun/zixun',
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })

      }
    }
  }
})