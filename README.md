# ca-input-pc

A CA input plugin for vue

# Install

**NPM**
```cmd
npm install ca-input-pc --save
```

**Mount**

###### mount with global

```javascript
// main.js
import CaInputPc from 'ca-slider-pc'
Vue.use(CaInputPc)
```

###### mount with component
```javascript
import { CaInputPc } from 'ca-slider-pc'

export default {
  components: {
    CaInputPc
  }
}
```
**Options**
>input(text, password)

```javascript
{
    inputType: String, //text, password
    regexp: RegExp, //自定义正则表达式，在blur时候验证
    textType: String, //默认可选正则验证，password, phone, account, email，integer，默认无
    blurVerify: Boolean, //是否开启blur验证，默认false
}
```

>input(file)

```javascript
{
    inputType: String, //file
    regexp: RegExp, //自定义正则表达式，在blur时候验证
    buttonTxt: String, //上传按钮文字
    maxSize: Number, //文件最大可上传大小
    fileType: Array,
    //验证文件类型正则选项，示例[1,2,3]，0 pdf， 1 jpeg jpg jpe，2 gif， 3 png， 4 excel， 5 word， 6 mp4， 7 ogg， 8 mpeg
    fileVerify: Boolean //是否验证上传的文件， 默认false
}
```

**Methods**

* input(input,password) @result
* input(file) @getFile

**Demo**

```javascript
    <template>
      <div class="hello">
        <div class="input-demo">
          <ca-input-pc :inputType="options.inputType" :blurVerify="options.blurVerify" :textType="options.textType" @result ="onBlur"></ca-input-pc>
        </div>
      </div>
    </template>

    <script>
        export default {
            name: 'demo',
            data() {
                return {
                    options:{
                        inputType: "text",
                        blurVerify: true,
                        textType: "account"
                    }
                }
            },
            methods: {
                onBlur(val) {
                    console.log(val);
                }
            }
        }
    </script>
```
