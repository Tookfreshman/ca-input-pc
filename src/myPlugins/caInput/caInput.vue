<template lang="html">
    <div class="container">
        <div class="txt-input" v-if="inputType === 'text' || inputType === 'password'">
            <input :type="inputType" @blur="verify" v-model="value" />
        </div>
        <div class="file-input" v-if="inputType === 'file'">
            <input type="file" @change="fileUpload($event)" class="hide" ref="uploadItem" />
            <div class="upload-button" @click="$refs.uploadItem.click()">{{buttonTxt}}</div>
        </div>
    </div>
</template>

<script>
const fileRegx = [
    '(application/pdf)', //pdf
    '(image/jpeg)', //jpe jepg jpg
    '(image/gif)', //gif
    '(image/png)', //png
    '(application/vnd\\.ms-excel)|(application/vnd\\.openxmlformats-officedocument\\.spreadsheetml\\.sheet)', //excel
    '(application/msword)|(application/vnd\\.openxmlformats-officedocument\\.wordprocessingml\\.document)', //word
    '(audio/mp4)', //mp4
    '(application/ogg)',  //ogg
    '(video/mpeg)', //mpeg
]
export default {
    name: 'ca-input-pc',
    data() {
        return {
            regx: {
                password: /^(?!([\d]+|[a-zA-Z]+|[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]+)$)[\w\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{6,20}$/,
                phone: /^\d{4,11}$/,
                account: /(?=.*[\d])(?=.*[a-zA-Z])^[a-zA-Z]{1}[0-9A-Za-z_]{5,19}$/,
                email: /^[a-z0-9]+([._\\-]*[a-z0-9]){3,}@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
                integer: /^\d*$/,
            },
            value: ''
        }
    },
    mounted() {

    },
    methods: {
        verify() {
            if(this.blurVerify + '' !== "true"){
                return;
            }
            const regx = this.regexp ? this.regexp : (this.textType === '' ? null : this.regx[this.textType]);
            const val = regx === null ? true : regx.test(this.value);
            this.$emit("result", val);
        },
        fileUpload(e) {
            if(e.target.files.length === 0) return;
            const file = e.target.files[0];
            const fileName = file.name;
            const size = file.size / 1024 / 1024;
            const maxSize = this.maxSize;
            const type = file.type;
            let defaultRegx = '';
            const obj = {
                sizeVerify: true,
                typeVerify: true,
                file: file
            };
            if(!this.fileVerify){
                this.$emit("getFile", obj);
                return;
            }
            if(maxSize && maxSize < size){
                obj.sizeVerify = false;
            }
            if(this.fileType){
                this.fileType.forEach((item, index) => {
                    if(index !== this.fileType.length -1){
                        defaultRegx += fileRegx[item] + '|';
                    }else{
                        defaultRegx += fileRegx[item];
                    }
                });
            }
            defaultRegx = new RegExp('^' + defaultRegx + '$');
            const regx = this.regexp ? this.regexp : (this.fileType ? defaultRegx : /^.*$/);
            obj.typeVerify = regx.test(type);
            this.$emit("getFile", obj);
        }
    },
    props: {
        inputType: {
            type: String,
            default: 'text' //支持text、password、file
        },
        regexp: {
            type: RegExp,
            default: null
        },
        textType: {
            type: String,
            default: ''
        },
        blurVerify: {
            type: Boolean,
            default: false,
        },
        buttonTxt: {
            type: String,
            default: '上传'
        },
        maxSize: {
            type: Number,
            default: null
        },
        fileType: {
            type: Array,
            default: null
        },
        fileVerify: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="css" scoped>
.container{
    display: inline-block;
}
.container .txt-input,.container .file-input{

}
.container .file-input{

}
.container .file-input .hide{
    display: none;
}
.container .file-input .upload-button{
    position: relative;
    font-size: 13px;
    padding: 3px 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.container .file-input .upload-button:active{
    top: -1px;
}
</style>
