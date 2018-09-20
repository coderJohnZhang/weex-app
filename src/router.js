/*global Vue*/
import Router from 'vue-router'
import Test from '@/components/TestAPI'
import Calculator from '@/components/Calculator'
import Banner from '@/components/Banner'
import BottomNavigation from '@/components/BottomNavigation'
import Input from '@/components/Input'
import Animation from '@/components/Animation'
import List from '@/components/List'
import Picker from '@/components/Picker'
import RecyclerView from '@/components/RecyclerView'
import Scroller from '@/components/Scroller'
import Waterfall from '@/components/Waterfall'
import WebSocket from '@/components/WebSocket'

Vue.use(Router)

module.exports = new Router({
  routes: [{
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
    {
      path: '/tab',
      name: 'tab',
      component: BottomNavigation
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/anim',
      name: 'anim',
      component: Animation
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/picker',
      name: 'picker',
      component: Picker
    },
    {
      path: '/recycler',
      name: 'recycler',
      component: RecyclerView
    },
    {
      path: '/scroller',
      name: 'scroller',
      component: Scroller
    },
    {
      path: '/waterfall',
      name: 'waterfall',
      component: Waterfall
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: WebSocket
    }
  ]
})