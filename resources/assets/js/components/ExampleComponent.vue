<template>
    <div class="container" style="border-width: 4px; border-style: solid;">
        <div class="row">
            <div class="col-md-6 col-sm-6" style="vertical-align: center;">
                <table width="100%"><tr><td style="padding-top: 10px;">
                    <img  src="images/ivote.png">
                </td><td>
                    <img id="opros" src="images/upload.gif" style="display: none; width: 100px;">
                </td></tr></table>
            </div>
            <div class="col-md-6 col-sm-6" style="padding-top: 10px;">
                <div class="callout callout-info">
                    <h4>Пульт интерактивного голосования</h4>
                    <p>Новая свобода для мобильных устройств.</p>
                </div>
            </div>
        </div>
        <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="1" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="1" style="font-size: 80px; font-weight: bolder;">1</font><br>
                    <i id="l1" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="2" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="2" style="font-size: 80px; font-weight: bold;">2</font><br>
                    <i id="l2" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="3" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="3" style="font-size: 80px; font-weight: bold;">3</font><br>
                    <i id="l3" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
        </div>
        <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="4" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="4" style="font-size: 80px; font-weight: bold;">4</font><br>
                    <i id="l4" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="5" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="5" style="font-size: 80px; font-weight: bold;">5</font><br>
                    <i id="l5" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="6" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="6" style="font-size: 80px; font-weight: bold;">6</font><br>
                    <i id="l6" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
        </div>
        <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="7" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="7" style="font-size: 80px; font-weight: bold;">7</font><br>
                    <i id="l7" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="8" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="8" style="font-size: 80px; font-weight: bold;">8</font><br>
                    <i id="l8" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="9" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="9" style="font-size: 80px; font-weight: bold;">9</font><br>
                    <i id="l9" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
        </div>
        <div class="row" style="padding-top: 25px; padding-bottom: 25px;">
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="10" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="10" style="font-size: 80px; font-weight: bold;">10</font><br>
                    <i id="l10" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="11" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="11" style="font-size: 80px; font-weight: bold;">11</font><br>
                    <i id="l11" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
            <div class="col-md-4 col-sm-4" style="text-align: center;">
                <button type="button" key="12" class="btn  bg-purple" style="min-width: 165px; height: 165px; padding-top: 0px;">
                    <font key="12" style="font-size: 80px; font-weight: bold;">12</font><br>
                    <i id="l12" class="fa fa-minus" style="font-size: 55px; color: lightgrey;"></i>
                </button>
            </div>
        </div>
    <DxButton
            text="Click me"
            @click="sayHelloWorld"
    />
    </div>
</template>

import axios from 'axios';

<script>
    import DxButton from 'devextreme-vue/button';

    export default {
        name: "app-example",
        components: {
            DxButton
        },
        data() {
            return {
            };
        },
        created() {
            this.loadData();
        },
        methods: {
            loadData() {

            },

            sayHelloWorld() {
                alert('Hello world!')
            }
        },
        mounted() {

        }
    }
</script>
