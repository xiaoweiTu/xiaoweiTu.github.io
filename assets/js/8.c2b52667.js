(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{282:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("数组的核心使用无非就add,get,foreach等方法,这里只关注于最核心的add方法源码,基于JDK1.8版本。")]),a._v(" "),t("p",[a._v("先看下arraylist的结构。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38bedb615e474ec2a9ad2addd3a3916c~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),a._v(" "),t("h2",{attrs:{id:"new的过程做了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new的过程做了什么"}},[a._v("#")]),a._v(" new的过程做了什么")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \n\n 这个过程发生了什么"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v("  我们点进去看一下源码\n\n")])])]),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e74e009643574db08b4da8bf98c4c6c1~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),a._v(" "),t("p",[a._v("这一过程主要是确定elementData的大小。")]),a._v(" "),t("p",[a._v("还有一种new的方法：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/299787dde1604d50b01600a8ac16d217~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),a._v(" "),t("p",[a._v("这种就是根据传入的集合按顺序组成新数组返回。")]),a._v(" "),t("blockquote",[t("p",[a._v("可以总结为  arraylist 初始化就是指定数组的大小,没有其他特殊的")])]),a._v(" "),t("h2",{attrs:{id:"add的过程发生了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add的过程发生了什么"}},[a._v("#")]),a._v(" add的过程发生了什么")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TestArrayList")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" objects "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n        objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"增加一个元素"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n依然追寻到源码看看如何设计的\n")])])]),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a7c9a555dfa488297cbc661683de01a~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),a._v(" "),t("p",[a._v("可以看到首先调用了一个方法:  ensureCapacityInternal(size +1 ) 传入的值是当前size加1 也就是 1 ,因为此时size只有默认值。")]),a._v(" "),t("p",[a._v("跟进去看看到底做了什么？")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ebf8e014d2e4fd097275814fabb9677~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),a._v(" "),t("p",[a._v("哦吼,又得追到参数方法里面看看返回了什么了")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/700e1987e2fd41a98812849c79738252~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}}),a._v("\n这个不难猜出来这一步就是为计算当前得数组最大位置,如果当前数组为空数组,那么返回定义的最小容量也就是10,否则返回传入的值。")]),a._v(" "),t("p",[a._v("接下来回到上一层方法: ensureExplicitCapacity")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9d5f11d2bdb40f78a6ce97a40590c19~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),a._v(" "),t("p",[a._v("首先对modCount进行++操作, 可以看作是修改次数增加了1次。")]),a._v(" "),t("p",[a._v("下面的判断: minCapacity 此时为 10  大于数组长度 0 所以这里需要发生扩容。")]),a._v(" "),t("h2",{attrs:{id:"扩容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩容"}},[a._v("#")]),a._v(" 扩容")]),a._v(" "),t("p",[a._v("看一下扩容的源代码:")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88321fa342f14fef9bebd606f9f691d8~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),a._v(" "),t("p",[a._v("重点代码:")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" newCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" oldCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n这一步就是确认新的数组长度"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("可以看到是由老的数组长度加上老数组右移"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("位得到的新长度，也就是每次扩容一半的长度。\n        \n但此时oldCapacity为"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("进入第一个"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v("判断"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("将minCapacity的值也就是"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("赋值给了newCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("最后进行扩容。\n        \nelementData "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Arrays")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("copyOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("elementData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n\n数组的扩容复制最终用到了"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("native")]),a._v("方法"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("具体的复制可以自行参考百度"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("这里不做过多的赘述。\n")])])]),t("h2",{attrs:{id:"复制方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制方法"}},[a._v("#")]),a._v(" 复制方法")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc43809a708a4ee88b1efe6229632ce6~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}}),a._v("\n复制有2种,深复制和浅复制:")]),a._v(" "),t("ul",[t("li",[a._v("当数组为一维数组，且元素为基本类型或String类型时，属于深复制，即原数组与新数组的元素不会相互影响")]),a._v(" "),t("li",[a._v("当数组为多维数组，或一维数组中的元素为引用类型时，属于浅复制，原数组与新数组的元素引用指向同一个对象")])]),a._v(" "),t("p",[a._v("扩容完毕后执行  elementData[size++] = e;")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[a._v("到这应该可以明白几个点: \n\n1. add是线程不安全的。\n2. 最好一开始就确认数组的长度,防止频繁发生扩容。\n3. 扩容发生在增加元素位置不够时,每次增加1.5倍, 扩容还需要注意深复制和浅复制的问题。\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);