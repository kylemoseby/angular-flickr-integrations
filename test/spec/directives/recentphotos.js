'use strict';

describe('Directive: flickrPhoto', function () {

    // load the directive's module
    beforeEach(module('flickrportfolioApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();

        scope.index = {
            'photos': {
                'page': 1,
                'pages': 1,
                'perpage': 500,
                'total': 379,
                'photo': [{
                    'id': '24625791404',
                    'owner': '91631856@N00',
                    'secret': 'bb664b29d9',
                    'server': '1654',
                    'farm': 2,
                    'title': 'Iceland 2014',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0,
                    'description': {
                        '_content': 'Processed with VSCO and Layout'
                    }
                }, {
                    'id': '25230170006',
                    'owner': '91631856@N00',
                    'secret': '099979ffed',
                    'server': '1519',
                    'farm': 2,
                    'title': '',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0,
                    'description': {
                        '_content': ''
                    }
                }, {
                    'id': '25138151532',
                    'owner': '91631856@N00',
                    'secret': '5ba6f3483a',
                    'server': '1578',
                    'farm': 2,
                    'title': '',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0,
                    'description': {
                        '_content': ''
                    }
                }, {
                    'id': '24629641583',
                    'owner': '91631856@N00',
                    'secret': '229f9f0fce',
                    'server': '1445',
                    'farm': 2,
                    'title': '',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0,
                    'description': {
                        '_content': ''
                    }
                }, {
                    'id': '25138150412',
                    'owner': '91631856@N00',
                    'secret': '54f7259aa0',
                    'server': '1452',
                    'farm': 2,
                    'title': '',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0,
                    'description': {
                        '_content': ''
                    }
                }, {
                    'id': '24629640243',
                    'owner': '91631856@N00',
                    'secret': '79d3224342',
                    'server': '1508',
                    'farm': 2,
                    'title': '',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0,
                    'description': {
                        '_content': ''
                    }
                }, {
                    'id': '24625788274',
                    'owner': '91631856@N00',
                    'secret': '37c0435e6f',
                    'server': '1701',
                    'farm': 2,
                    'title': '',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0,
                    'description': {
                        '_content': ''
                    }
                }, {
                    'id': '14934804760',
                    'owner': '91631856@N00',
                    'secret': '9290712783',
                    'server': '3872',
                    'farm': 4,
                    'title': 'Alpine Lakes Wilderness',
                    'ispublic': 1,
                    'isfriend': 0,
                    'isfamily': 0,
                    'description': {
                        '_content': ''
                    }
                }]
            },
            'stat': 'ok'
        };


        scope.photoDetail = null;

        scope.photoCount = 10;
        scope.photoStep = 5;
        scope.thumbsize = 'lg'; // 'sm'

    }));

    it('should make hidden element visible', inject(function ($compile) {

        element = angular.element('<flickr-photo></flickr-photo>');
        element = $compile(element)(scope);

        console.log('WAHT THE FUCK BRO');
        console.log(scope);
        console.log(element);

        // expect(element.text()).toBe('this is the flickrPhoto directive');
    }));
});


// 'use strict';

// describe('Directive: recentPhotos', function() {

//   var element,
//     $rootScope;

//   // load the directive's module
//   beforeEach(module('flickrportfolioApp'));

//   beforeEach(module('app/flickr/flickr-recent.html'));

//   beforeEach(inject(function(_$rootScope_) {

//     console.log(_$rootScope_);

//     // template = $templateCache.get('app/flickr/flickr-recent.html');

//     // $templateCache.put('flickr/flickr-recent.html', template);

//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     $rootScope = _$rootScope_;

//     // DEFAULT
//     $rootScope.index = null;
//     $rootScope.photoDetail = {};

//     $rootScope.count = 10;
//     $rootScope.step = 5;
//     $rootScope.thumbsize = 'lg'; // 'sm'
//   }));


//   // it('should make hidden element visible', inject(function() {
//   //   // element = angular.element('<recent-photos></recent-photos>');
//   //   // element = $compile(element)($rootScope);
//   //   // expect(element.text()).toBe('this is the recentPhotos directive');
//   // }));

//   it('should have a limited number of photos to start', function($compile) {
//     console.log($rootScope);

//     // element = $compile('<recent-photos></recent-photos>')($rootScope);

//     $rootScope.$digest();

//     expect(true).toBe(true);
//   });

//   // it('should only add a specified number of photos to the screen', function() {

//   // });

//   // it('should be able to set a photoDetail', function() {

//   // });

//   // it('should change a photoDetail', function() {

//   // });

//   // it('should hide a photoDetail', function() {

//   // });
// });
