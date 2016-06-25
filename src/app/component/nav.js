// top navigation bar component

import {h} from 'deku'

export const TopNav = {
  render() {
    return h('header', {
      class: 'mb3 w-100 bg-white gray fx fx-ai-c'
    }, [
      h('img', {src: '/logo.svg', class: 'h3 w3 pa2 border-box'}),
      h('span', {class: 'mr-auto'}, [
        h('span', {class: 'f3'}, ['tracespace']),
        h('span', {class: 'f4 fw2'}, [' | viewer'])
      ]),
      h('nav', {class: 'fr lh-copy f4'}, [
        h('a', {href: '#', class: 'border-box pa3 no-underline link gray hover-dark-gray focus-dark-gray'}, ['about'])
      ])
    ])
  }
}
