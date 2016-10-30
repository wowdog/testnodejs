
//전시장선택
function locationSelect(val) {
    var html = "";
    if (val == "서울") {
        html = '<option value ="0"> 찾아가는 시승 </option>' + '<option value ="1"> MINI 강남 </option>' + '<option value ="2"> MINI 목동 </option>' + '<option value ="3"> MINI 삼성 </option>' + '<option value ="4"> MINI 서초 </option>' + '<option value ="5"> MINI 용산 </option>';
    } else if (val == "경기") {
        html = '<option value ="1"> MINI 일산 </option>' + '<option value ="2"> MINI 부천 </option>' + '<option value ="3"> MINI 분당 </option>' + '<option value ="4">MINI 수원 </option>';
    } else if (val == "인천") {
        html = '<option value ="1"> MINI 인천 </option>';
    } else if (val == "부산") {
        html = '<option value ="1"> MINI 부산 </option>';
    } else if (val == "창원") {
        html = '<option value ="1"> MINI 창원 </option>';
    } else if (val == "울산") {
        html = '<option value ="1"> MINI 울산 </option>';
    } else if (val == "대구") {
        html = '<option value ="1"> MINI 대구 </option>';
    } else if (val == "대전") {
        html = '<option value ="1"> MINI 대전 </option>';
    } else if (val == "광주") {
        html = '<option value ="1"> MINI 광주 </option>';
    } else if (val == "제주") {
        html = '<option value ="1"> MINI 제주 </option>';
    } else {
        html = '<option value ="0"> 지역을 선택하세요 </option>';
    }

    $('#location').html(html);
}

$(document).ready(function(){

    var selectedCar;
    var selectedLocate;
    var selectedDetailLocation;

    
    $(".modal-body").on('click', 'a', function (e) {

        selectedCar = $(":radio[name='car']:checked").val();
        selectedLocate = $("#test_select option:selected").val();
        selectedDetailLocation = $("#location option:selected").text();

        console.log(selectedCar+" ");
        console.log(selectedLocate+" ");
        console.log(selectedDetailLocation+" ");


        if(selectedCar === undefined){
            alert("차량을 선택해주세요.");
            $("input[name='car']").focus();
        }
        else if(selectedLocate === ""){
            alert("지역을 선택해주세요.");
            $("#test_select").focus();
        }
        $(".tabs > li > a").click(function () {//next 먹은 후 먹힘 들어왔나는 안찍히는데 아래는 먹히네

            if(selectedCar != undefined && selectedLocate != ""){

                var t_idx = $(this).parent().index();
                if (t_idx == 0) {
                    $(".tabs > li > a").removeClass('active');
                    $(".tab > div").css("display", "none");
                    $("#tab1").css("display", "block");
                    $(".tabs > .active1 > a").addClass('active');
                }
                if (t_idx == 1) {
                    $(".tabs > li > a").removeClass('active');
                    $(".tab > div").css("display", "none");
                    $("#tab2").css("display", "block");
                    $(".tabs > .active2 > a").addClass('active');
                }
                if (t_idx == 2) {
                    $(".tabs > li > a").removeClass('active');
                    $(".tab > div").css("display", "none");
                    $("#tab3").css("display", "block");
                    $(".tabs > .active3 > a").addClass('active');
                }


            }
        })
    });
    $(".next > input").click(function () {
        selectedCar = $(":radio[name='car']:checked").val();
        selectedLocate = $("#test_select option:selected").val();
        selectedDetailLocation = $("#location option:selected").text();

        if(selectedCar === undefined){
            alert("차량을 선택해주세요.");
            $("input[name='car']").focus();
        }
        else if(selectedLocate === ""){
            alert("지역을 선택해주세요.");
            $("#test_select").focus();
        }
        if(selectedCar != undefined && selectedLocate != "") {
            $("#tab1").css("display", "none");
            $("#tab2").css("display", "block");

            $(".tabs > li > a").removeClass('active');
            $(".active2 a").addClass('active');
        }
    });
    
    //NEXT클릭시
    var etc="";

    //탭2 입력폼
    $('.like_check.etc_check input').on('click', function () {
        $(this).parent().toggleClass('active').parent().find('.all_check').removeClass('active');
        $(".all_check input:checkbox").prop('checked', false);
    })

    //전체 동의
    $('.all_check input').on('click', function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active').siblings().removeClass('active');
            $("input[type='checkbox']").prop("checked", false);
        } else {
            $(this).parent().addClass('active').siblings().addClass('active');
            $("input[type='checkbox']").prop('checked',true);
        }
    });
    
    //서버날리기
    $("#drivingTestApplyBtn").click(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var phoneNum = $("#tel").val();
        var email = $("#email").val();
        var birthYear = $("#b_year").val();
        var sex = $("input[name='gender']:checked").val();

        if(name === ""){
            alert("이름을 2~10자 이내로 입력해주세요.");
            $("#name").focus();
        }
        else if(name.length < 2 || name.length > 10 ){
            alert("이름이 2자 이상 10자 이하가 아닙니다. 다시 입력해주세요.");
            $("#name").focus();
        }
        else if (phoneNum ===""){
            alert("휴대폰 번호를 입력해주세요.( - 는 생략)");
            $("#tel").focus();
        }
        else{
            var num_check = /^01([0|1|6|7|8|9]?)+?([0-9]{3,4})+?([0-9]{4})$/;
            if(num_check.test(phoneNum)){
                if (phoneNum.length < 10 || phoneNum.length > 11) {
                    alert('휴대폰 번호 자리수는 총 10자리 이상 11자리 이하로 숫자만 입력할 수 있습니다.');
                    $("#tel").focus();
                    return false;
                } else {
                    if(!email){
                        alert("이메일을 입력해주세요.");
                        $("#email").focus();
                    }
                    else{
                        var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                        if(!regEmail.test(email)) {
                            alert('이메일 주소가 유효하지 않습니다 다시 입력해주세요');
                            $("#email").focus();
                        }
                        else if(!birthYear || birthYear < 1950 || birthYear > 1996){
                            alert("출생년도를 입력해주세요");
                            $("#b_year").focus();
                        }
                        else if(birthYear.length != 4){
                            alert("출생년도는 4자리로 입력해주세요");
                            $("#b_year").focus();
                        }
                        else{
                            var checklength;
                            $(".etc_check input[type='checkbox']").each(function() {
                                checklength= $(".etc_check input:checked").length;
                            });
                            if(checklength == 2){
                                $.post("/drivingtest/apply", {
                                    name: name,
                                    phoneNum: phoneNum,
                                    email: email,
                                    birthYear: birthYear,
                                    sex: sex,
                                    etc: selectedCar + "<br>" + selectedLocate + " " + selectedDetailLocation
                                }, function (cb) {
                                    if (cb.result == "success") {
                                        alert("시승신청을 완료하였습니다.");
                                    } else {
                                        alert("오류 발생!!");
                                    }
                                }, 'json');
                                $("#tab2 .form_input input").val("");
                                $("#tab2 input[type='checkbox']").prop("checked", false);
                            }
                            else{
                                alert("개인정보 수집 및 제공에 동의 해주세요.");
                            }
                        }
                    }
                }
            }
            else{
                alert("휴대폰 번호가 유효하지 않습니다.");
                $("#tel").focus();
                return false;
            }

        }
    });
    
    //탭3 입력
    $("#output").click(function(){
        var email = $("input[name='mem_email']").val();
        var phone_num = $("input[name='mem_phone']").val();
        if(email==="" || phone_num===""){
            $(".output").text("입력된 값이 없습니다.");
        }
        else{
            $.post("/list", {
                email:email, phone_num:phone_num
            }, function(cb){
                if(cb.result=="success"){
                    $(".output").html("<span style='color:#909090;width:100px;clear:left;text-align:left;float:left;'>성함:</span>"+cb.sData.name+"<br>"+"<span style='color:#909090;width:100px;clear:left;text-align:left;float:left;'>출생연도:</span>" + cb.sData.birth_year +"<br>"+"<span style='color:#909090;width:100px;clear:left;text-align:left;float:left;'>성별:</span>" + cb.sData.sex +"<br>"+"<span style='color:#909090;width:100px;clear:left;text-align:left;float:left;'>선택사항:</span>" + cb.sData.etc);
                }else{
                    $(".output").text(cb.msg);
                }
                $("#confirm .member input").val("");
            },'json' );

        }
    });
});