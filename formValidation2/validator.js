
function Validator(formSelector) {
    //Gán giá trị mặc định cho tham sô khi định nghĩa
    var _this = this

    var formRules = {}

    /**
     * Quy ước tạo rule:
     * - Nếu có lỗi thì return `error message`
     * - Nếu không có lỗi thì return `undefined`
     */
    var validatorRules = {
        required: function (value) {
            return value ? undefined : `Vui lòng nhập trường này`
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : `Vui lòng nhập email`
        },
        min: function (min) {
            return function(value) {
                return value.length >= min ? undefined : `Mật khẩu tối thiếu ${min} kí tự`
            }
        },
        max: function (max) {
            return function(value) {
                return value.length <= min ? undefined : `Mật khẩu tối đa ${max} kí tự`
            }
        },
    }


    
    // Lấy ra form element trong DOM theo `formSelector`
    var formElement = document.querySelector(formSelector)

    // Chỉ xử lý khi có element trong DOM
    if (formElement) { 

        var inputs = formElement.querySelectorAll('[name][rules]')

        for(var input of inputs) {

            var rules = input.getAttribute('rules').split('|')
            for (var rule of rules) {
                var ruleInfo
                var isRuleHasValue = rule.includes(':')
                
                if (isRuleHasValue) {
                    ruleInfo = rule.split(':')
                    rule = ruleInfo[0]
                }

                var ruleFunc = validatorRules[rule]


                if(isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]
                }   
            }

            //Lắng nghe sự kiện để validate (blur, change....)

            input.onblur = handleValidate
            input.oninput = handleClearError
        }


        //Hàm thực hiện validate
        function handleValidate(e) {
            var rules = formRules[e.target.name]
            var errorMessage

            // for (var rule of rules) {
            //     errorMessage = rule(e.target.value)
            //     if(errorMessage) break
            // }

            rules.some(function(rule) {
                errorMessage = rule(e.target.value)
                return errorMessage
            })

            //Nếu có lỗi thì hiển thị message ra UI
            if (errorMessage) {
                var formGroup = e.target.closest('.form-group')
                var formMessage = formGroup.querySelector('.form-message')
                formGroup.classList.add('invalid')
                formMessage.innerText = errorMessage
            }

            return !errorMessage
        }

        function handleClearError(e) {
            var formGroup = e.target.closest('.form-group')
            var formMessage = formGroup.querySelector('.form-message')
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid')
            }
            if(formMessage) {
                formMessage.innerText = ''
            }
        }
    }

    //Xử lý hành vi submit form 
     formElement.onsubmit = function(e) {
        e.preventDefault()


        var inputs = formElement.querySelectorAll('[name][rules]')
        var isValid = true

        for(var input of inputs) {
            if(!handleValidate({target: input})) {
                isValid = false
            }
        }
        
        
        //Khi không có lỗi thì submit form
        if(isValid) {
            if(typeof _this.onSubmit === 'function') {
                return _this.onSubmit()
            } else {
                formElement.submit()
            }
            
        }
     }
}