/**
 * Created by Lemon on 2017/3/11.
 */
var app = angular.module('app', []);
app.controller('QQmusicController', ['$scope', '$interval', '$timeout', function ($scope, $interval, $timeout) {

    //头部列表数据
    $scope.headerList = ['首页', '歌手', '专辑', '排行榜', '分类歌曲', 'MV'];
    //新歌首发数据
    $scope.newMusicData = [
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003kOnTU08Cjbt.jpg?max_age=2592000',
            imgAlt: '',
            musicName: 'Warriors',
            name: '刘力扬'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003GjTOS39sGhw.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '向往',
            name: '孙楠'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000004BWjc704lr36.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '建筑师的梦想',
            name: '金志文'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002roMsp4OucCh.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '火星电台',
            name: '火星电台'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003Wo8jn2xZexC.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '歌手 第8期',
            name: '歌手'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002AJ0TE1tF8oD.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '厉害了！我的歌 第8期',
            name: '厉害了！我的歌'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M0000022LHfC35j9gN.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '围炉音乐会 第10期',
            name: '围炉音乐会'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002QkPyt2kX0bm.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '天籁之声 第7期',
            name: '天籁之声'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000001vIG8w1zUAfb.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '独特',
            name: '李宏毅'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M00000347S3J1XdWCp.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '彼此的未来',
            name: 'SNH48'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000000fDYlF1pcQLT.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '悠蓝曲',
            name: '刘惜君'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M0000000gTK12cQ5O5.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '奶奶',
            name: '阿来'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003dt7Az1VKNCc.jpg?max_age=2592000',
            imgAlt: '',
            musicName: 'Ocean',
            name: '阿克江·阿依丁'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M0000046F9En0aY7J7.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '敲 喜欢你',
            name: '严艺丹'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002RDMkT0ILsz3.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '伤心花',
            name: '简弘亦'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000001PrBgZ2F3Y7u.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '喂！有没有人在',
            name: '黄雅莉'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003kOnTU08Cjbt.jpg?max_age=2592000',
            imgAlt: '',
            musicName: 'Warriors',
            name: '刘力扬'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003GjTOS39sGhw.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '向往',
            name: '孙楠'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000004BWjc704lr36.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '建筑师的梦想',
            name: '金志文'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002roMsp4OucCh.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '火星电台',
            name: '火星电台'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003Wo8jn2xZexC.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '歌手 第8期',
            name: '歌手'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002AJ0TE1tF8oD.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '厉害了！我的歌 第8期',
            name: '厉害了！我的歌'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M0000022LHfC35j9gN.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '围炉音乐会 第10期',
            name: '围炉音乐会'
        },
        {
            imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002QkPyt2kX0bm.jpg?max_age=2592000',
            imgAlt: '',
            musicName: '天籁之声 第7期',
            name: '天籁之声'
        },
    ];
    /* $scope.newMusicData = [
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003kOnTU08Cjbt.jpg?max_age=2592000',
     imgAlt: '',
     musicName: 'Warriors',
     name: '刘力扬'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003GjTOS39sGhw.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '向往',
     name: '孙楠'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000004BWjc704lr36.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '建筑师的梦想',
     name: '金志文'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002roMsp4OucCh.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '火星电台',
     name: '火星电台'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003Wo8jn2xZexC.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '歌手 第8期',
     name: '歌手'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002AJ0TE1tF8oD.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '厉害了！我的歌 第8期',
     name: '厉害了！我的歌'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M0000022LHfC35j9gN.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '围炉音乐会 第10期',
     name: '围炉音乐会'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002QkPyt2kX0bm.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '天籁之声 第7期',
     name: '天籁之声'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000001vIG8w1zUAfb.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '独特',
     name: '李宏毅'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M00000347S3J1XdWCp.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '彼此的未来',
     name: 'SNH48'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000000fDYlF1pcQLT.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '悠蓝曲',
     name: '刘惜君'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M0000000gTK12cQ5O5.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '奶奶',
     name: '阿来'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003dt7Az1VKNCc.jpg?max_age=2592000',
     imgAlt: '',
     musicName: 'Ocean',
     name: '阿克江·阿依丁'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M0000046F9En0aY7J7.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '敲 喜欢你',
     name: '严艺丹'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002RDMkT0ILsz3.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '伤心花',
     name: '简弘亦'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000001PrBgZ2F3Y7u.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '喂！有没有人在',
     name: '黄雅莉'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003kOnTU08Cjbt.jpg?max_age=2592000',
     imgAlt: '',
     musicName: 'Warriors',
     name: '刘力扬'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003GjTOS39sGhw.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '向往',
     name: '孙楠'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000004BWjc704lr36.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '建筑师的梦想',
     name: '金志文'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002roMsp4OucCh.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '火星电台',
     name: '火星电台'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000003Wo8jn2xZexC.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '歌手 第8期',
     name: '歌手'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002AJ0TE1tF8oD.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '厉害了！我的歌 第8期',
     name: '厉害了！我的歌'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M0000022LHfC35j9gN.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '围炉音乐会 第10期',
     name: '围炉音乐会'
     },
     {
     imgSrc: '//y.gtimg.cn/music/photo_new/T002R300x300M000002QkPyt2kX0bm.jpg?max_age=2592000',
     imgAlt: '',
     musicName: '天籁之声 第7期',
     name: '天籁之声'
     },
     ];*/
    $scope.itemAllMarginLeft = -1200;
    //定义margin-left固定大小
    $scope.marginLeftPX = function (val, num) {
        $scope.itemAllMarginLeft = val;
        $scope.changeSwitchNum(num);

    };
    $scope.switchNum = 0;
    //改变小圆点样式事件
    $scope.changeSwitchNum = function (num) {
        $scope.switchNum = num;
    };

    //定时循环轮播

    $scope.startCarousel = function () {
        $scope.carouselImg = $interval(function () {
            $scope.changeMarginLeft('-1200');
            $scope.hotMusicChangeMarginLeft('-1200');
            if ($scope.itemAllMarginLeft == -6000) {
                $timeout(function () {
                    $scope.transitionTime = '0s';
                    $scope.itemAllMarginLeft = -1200;
                }, 1000);
                $timeout(function () {
                    $scope.transitionTime = '1s';
                }, 1007);

            }

        },5000);
    };
    $scope.startCarousel();
    // document.getElementsByClassName('item-all')[0].onm
    $scope.clearCarousel = function () {
        $interval.cancel($scope.carouselImg);
    };

    var switchNum = 1;
    //两边按钮改变marginLeft
    $scope.changeMarginLeft = function (val) {
        /*var i = 0;
         $timeout(function () {
         i = 1
         },500);*/

        if (switchNum) {
            switchNum = 0;
            $timeout(function () {
                switchNum = 1
            }, 1010);
            $scope.itemAllMarginLeft = parseInt($scope.itemAllMarginLeft) + parseInt(val);
            if (val == 1200) {
                if ($scope.switchNum == 0) {
                    $scope.switchNum = 3;
                } else {
                    $scope.switchNum--;
                }
                console.log($scope.switchNum);

            } else if (val == -1200) {
                if ($scope.switchNum == 3) {
                    $scope.switchNum = 0;
                } else {
                    $scope.switchNum++;
                }
                console.log($scope.switchNum);
            }

            if ($scope.itemAllMarginLeft == -6000) {
                $timeout(function () {
                    $scope.transitionTime = '0s';
                    $scope.itemAllMarginLeft = -1200;
                }, 1000);
                $timeout(function () {
                    $scope.transitionTime = '1s';
                }, 1008);

            }

            if ($scope.itemAllMarginLeft == 0) {
                $timeout(function () {
                    $scope.transitionTime = '0s';
                    $scope.itemAllMarginLeft = -4800;
                }, 1000);
                $timeout(function () {
                    $scope.transitionTime = '1s';
                }, 1008);
            }
            console.log($scope.itemAllMarginLeft)
        }


    };


    /*最笨的方法做循环，日狗一般*/
    //循环图片位置事件
    $scope.number1 = 1;
    $scope.number2 = 2;
    $scope.number3 = 3;
    $scope.number4 = 4;
    $scope.number5 = 5;
    $scope.imgPosition1 = 'position' + $scope.number1;
    $scope.imgPosition2 = 'position' + $scope.number2;
    $scope.imgPosition3 = 'position' + $scope.number3;
    $scope.imgPosition4 = 'position' + $scope.number4;
    $scope.imgPosition5 = 'position' + $scope.number5;
    //初始化小圆点数据
    $scope.item = 1;
    $scope.loop = $interval(function () {
        if ($scope.number1 == 1) {
            $scope.number1 = 5;
        } else {
            $scope.number1--;
        }
        if ($scope.number2 == 1) {
            $scope.number2 = 5;
        } else {
            $scope.number2--;
        }
        if ($scope.number3 == 1) {
            $scope.number3 = 5;
        } else {
            $scope.number3--;
        }
        if ($scope.number4 == 1) {
            $scope.number4 = 5;
        } else {
            $scope.number4--;
        }
        if ($scope.number5 == 1) {
            $scope.number5 = 5;
        } else {
            $scope.number5--;
        }
        $scope.item++;
        if ($scope.item == 6) {
            $scope.item = 1;
        }
        synchronization();

    }, 3000);
    $scope.clearMyInterval = function () {
        $interval.cancel($scope.loop);
    };
    $scope.startLoop = function () {
        $scope.loop = $interval(function () {
            $scope.item++;
            if ($scope.item == 6) {
                $scope.item = 1;
            }
            if ($scope.number1 == 1) {
                $scope.number1 = 5;
            } else {
                $scope.number1--;
            }
            if ($scope.number2 == 1) {
                $scope.number2 = 5;
            } else {
                $scope.number2--;
            }
            if ($scope.number3 == 1) {
                $scope.number3 = 5;
            } else {
                $scope.number3--;
            }
            if ($scope.number4 == 1) {
                $scope.number4 = 5;
            } else {
                $scope.number4--;
            }
            if ($scope.number5 == 1) {
                $scope.number5 = 5;
            } else {
                $scope.number5--;
            }
            synchronization();
            console.log($scope.imgPosition1);

        }, 3000);
    };

    /*右边按钮点击事件*/
    $scope.loopRight = function () {
        $scope.item++;
        if ($scope.item == 6) {
            $scope.item = 1;
        }
        if ($scope.number1 == 1) {
            $scope.number1 = 5;
        } else {
            $scope.number1--;
        }
        if ($scope.number2 == 1) {
            $scope.number2 = 5;
        } else {
            $scope.number2--;
        }
        if ($scope.number3 == 1) {
            $scope.number3 = 5;
        } else {
            $scope.number3--;
        }
        if ($scope.number4 == 1) {
            $scope.number4 = 5;
        } else {
            $scope.number4--;
        }
        if ($scope.number5 == 1) {
            $scope.number5 = 5;
        } else {
            $scope.number5--;
        }
        $scope.imgPosition1 = 'position' + $scope.number1;
        $scope.imgPosition2 = 'position' + $scope.number2;
        $scope.imgPosition3 = 'position' + $scope.number3;
        $scope.imgPosition4 = 'position' + $scope.number4;
        $scope.imgPosition5 = 'position' + $scope.number5;
    };
    /*左边按钮点击事件*/
    $scope.loopLeft = function () {
        $scope.item--;
        if ($scope.item == 0) {
            $scope.item = 5;
        }
        if ($scope.number1 == 5) {
            $scope.number1 = 1;
        } else {
            $scope.number1++;
        }
        if ($scope.number2 == 5) {
            $scope.number2 = 1;
        } else {
            $scope.number2++;
        }
        if ($scope.number3 == 5) {
            $scope.number3 = 1;
        } else {
            $scope.number3++;
        }
        if ($scope.number4 == 5) {
            $scope.number4 = 1;
        } else {
            $scope.number4++;
        }
        if ($scope.number5 == 5) {
            $scope.number5 = 1;
        } else {
            $scope.number5++;
        }
        synchronization()
    };

    //同步数据
    function synchronization() {
        $scope.imgPosition1 = 'position' + $scope.number1;
        $scope.imgPosition2 = 'position' + $scope.number2;
        $scope.imgPosition3 = 'position' + $scope.number3;
        $scope.imgPosition4 = 'position' + $scope.number4;
        $scope.imgPosition5 = 'position' + $scope.number5;
    }

    $scope.changeImgClass = function (index) {
        $scope.item = index;
        if (index == 1) {
            $scope.number1 = 1;
            $scope.number2 = 2;
            $scope.number3 = 3;
            $scope.number4 = 4;
            $scope.number5 = 5;
            synchronization()

        } else if (index == 2) {
            $scope.number1 = 5;
            $scope.number2 = 1;
            $scope.number3 = 2;
            $scope.number4 = 3;
            $scope.number5 = 4;
            synchronization()
        } else if (index == 3) {
            $scope.number1 = 4;
            $scope.number2 = 5;
            $scope.number3 = 1;
            $scope.number4 = 2;
            $scope.number5 = 3;
            synchronization()
        } else if (index == 4) {
            $scope.number1 = 3;
            $scope.number2 = 4;
            $scope.number3 = 5;
            $scope.number4 = 1;
            $scope.number5 = 2;
            synchronization()
        } else if (index == 5) {
            $scope.number1 = 2;
            $scope.number2 = 3;
            $scope.number3 = 4;
            $scope.number4 = 5;
            $scope.number5 = 1;
            synchronization()
        }
    }


    //热门歌单数据
    $scope.hotMusicData = [
        {
            imgSrc: 'https://p.qpic.cn/music_cover/P20havNexwvwLeY3iaQXBYFy6ya6PE6Akkrriaicsib1yGN1nibfup8uibXw/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/xy585mIRLoGjBb9SibEqA5tZaFvBzLAWkibIicamtUBcCcB3qxJ3BXvfQ/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/NJjuMOxtdpFtqDEZIb8NeiczAbTOxcjtbX6oYcJmm28RYGbmdzWyL3w/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/TwPDxpULgKksPIr09C0JXXSiadiahkgr9b8rI4AQmLbbiajTtibkYPTvUQ/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },

        {
            imgSrc: 'https://p.qpic.cn/music_cover/eO9YLkEHAnz3gntq1uUDLib6BRTddbsxibZjCibmtbY6FM8wSRW4uSr8Q/300?n=1',
            musicName: '欧美丨开口就惊艳了耳朵的神级翻唱合集',
            playData: '258.0万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT7YTQHClGIWddvh4iaJ6rqjicpru8Un5hibbw/300?n=1',
            musicName: '百首TVB主题曲：不可辜负的原声精选',
            playData: '90.2万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/lricrZ3ca62ybvZbWYjtYaibjUALb23wzW3wjSAyibbOR6xakbVTLeYWw/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/A0mhqDvcnmDAYwG6K9ichRiaAibqfOrvPAIkVk5TrsyrrW1sDvYpQD2YA/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/c7wEsoZEtvjmodM2LpcAqibYy4VfuAo7Nn4ga59pozDkLnlDCcH7Xdg/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/JWRektvRn6r9JicBHjNrug9UBuPIWVrnyD8QITNbgfySt9qB5hGxRhQ/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/9s8qhUCdhaJxWbibVsXbJlibLm2VXsfsm68bCE3RyRDgDaw9KbbcskGw/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/TPTQPoBDp8OplC2Tkaewj8Js6dE7X4jInrXhXErV1XdgZ08ODTT6DA/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/P20havNexwvwLeY3iaQXBYFy6ya6PE6Akkrriaicsib1yGN1nibfup8uibXw/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/xy585mIRLoGjBb9SibEqA5tZaFvBzLAWkibIicamtUBcCcB3qxJ3BXvfQ/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/NJjuMOxtdpFtqDEZIb8NeiczAbTOxcjtbX6oYcJmm28RYGbmdzWyL3w/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/TwPDxpULgKksPIr09C0JXXSiadiahkgr9b8rI4AQmLbbiajTtibkYPTvUQ/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/eO9YLkEHAnz3gntq1uUDLib6BRTddbsxibZjCibmtbY6FM8wSRW4uSr8Q/300?n=1',
            musicName: '欧美丨开口就惊艳了耳朵的神级翻唱合集',
            playData: '258.0万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT7YTQHClGIWddvh4iaJ6rqjicpru8Un5hibbw/300?n=1',
            musicName: '百首TVB主题曲：不可辜负的原声精选',
            playData: '90.2万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/lricrZ3ca62ybvZbWYjtYaibjUALb23wzW3wjSAyibbOR6xakbVTLeYWw/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },
        {
            imgSrc: 'https://p.qpic.cn/music_cover/A0mhqDvcnmDAYwG6K9ichRiaAibqfOrvPAIkVk5TrsyrrW1sDvYpQD2YA/300?n=1',
            musicName: '二次元纯音精选：邂逅唯美的の世界',
            playData: '44.1万'
        },

    ];
    $scope.hotMusicMarginLeft = -1200;
    var switchNum2 = 1;
    $scope.hotMusicChangeMarginLeft = function (val) {

        if (switchNum2) {
            $timeout(function () {
                switchNum2 = 1;
            },1010);
            switchNum2 = 0;
            $scope.hotMusicMarginLeft = parseInt($scope.hotMusicMarginLeft) + parseInt(val);

            if ($scope.hotMusicMarginLeft == -4800) {
                $timeout(function () {
                    $scope.hotTransitionTime = '0s';
                    $scope.hotMusicMarginLeft = -1200;
                }, 1000);
                $timeout(function () {
                    $scope.hotTransitionTime = '1s';
                }, 1008);
            }
            if ($scope.hotMusicMarginLeft == 0) {
                $timeout(function () {
                    $scope.hotTransitionTime = '0s';
                    $scope.hotMusicMarginLeft = -3600;
                }, 1000);
                $timeout(function () {
                    $scope.hotTransitionTime = '1s';
                }, 1007);
            }

            if (val == 1200 && $scope.hotMusicSwitchNum == 0) {
                $scope.hotMusicSwitchNum = 2;
            } else if (val == -1200 && $scope.hotMusicSwitchNum == 2) {
                $scope.hotMusicSwitchNum = 0;
            } else {
                $scope.hotMusicSwitchNum++;
            }
        }
    };


    //小圆点位置
    $scope.hotMusicSwitchNum = 0;
    //小圆点改变margin
    $scope.changeHotMusicMarginLeft = function (value) {
        $scope.hotMusicMarginLeft = value;
        if (value == 0) {
            $scope.hotMusicSwitchNum = 0;
        } else if (value == -1200) {
            $scope.hotMusicSwitchNum = 1;
        } else {
            $scope.hotMusicSwitchNum = 2;
        }
    };


    //mv首播数据
    $scope.MVlistItem = [
        {
            imgSrc: '//shp.qpic.cn/qqvideo_ori/0/p00230hog9w_360_204/0',
            mvName: '鹿晗《Venture》特别映像“H”篇之《敢（Roleplay）》',
            name: '鹿晗',
            playData: '3.3万'
        },
        {
            imgSrc: '//shp.qpic.cn/qqvideo_ori/0/u0023z4ozqe_360_204/0',
            mvName: '思慕',
            name: '郁可唯',
            playData: '3.5万'
        },
        {
            imgSrc: '//shp.qpic.cn/qqvideo_ori/0/m00233x239q_360_204/0',
            mvName: '下次爱你',
            name: '张敬轩',
            playData: '4.5万'
        },
        {
            imgSrc: '//shp.qpic.cn/qqvideo_ori/0/w00236oqeto_360_204/0',
            mvName: '悠蓝曲',
            name: '刘惜君',
            playData: '3.8万'
        },
        {
            imgSrc: '//shp.qpic.cn/qqvideo_ori/0/y0023vto5k4_360_204/0',
            mvName: 'Everglow(第二版)',
            name: 'Coldplay',
            playData: '2613'
        },
        {
            imgSrc: '//shp.qpic.cn/qqvideo_ori/0/j0023eqs562_360_204/0',
            mvName: 'Never Ever',
            name: 'GOT7',
            playData: '7.5万'
        },
        {
            imgSrc: '//shp.qpic.cn/qqvideo_ori/0/s00237l17my_360_204/0',
            mvName: 'Beauty And The Beast',
            name: 'Lindsey String',
            playData: '1006'
        },
        {
            imgSrc: '//shp.qpic.cn/qqvideo_ori/0/t00234cgpku_360_204/0',
            mvName: '梦想广州',
            name: '1931组合',
            playData: '3255'
        },
    ];

}]);


window.onscroll = function () {

//变量t就是滚动条滚动时，到顶部的距离
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 200) {
        document.getElementsByClassName('btn-top')[0].style = 'opacity:1'
    } else {
        document.getElementsByClassName('btn-top')[0].style = 'opacity:0'
    }

    /*var left = document.getElementById("left");
     if (t >= 100) {     //当拖动到距离顶部100px处时，左边导航固定，不随滚动条滚动

     left.style.position = "fixed";
     left.style.top = "0";

     } else {

     //恢复正常
     left.style.position = "absolute";
     left.style.top = "100px";
     }*/

};

