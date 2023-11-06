
// Đối tượng
function Validator(options) {
    //
    function getParent(element, selector) {
        while(element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    //Lấy element của form cần validate 
    var formElement = document.querySelector(options.form)
    var selectorRules = {}


    // Hàm thực hiện validate
    function validate(inputElement, rule) {

        //var erroElement = getParent(inputElement, '.form-group')
        var errorMessage
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector) 

        var rules = selectorRules[rule.selector]


        //Lặp qua từng rule và kiểm tra
        //Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector+':checked')
                    ) 
                break
                default:
                    errorMessage = rules[i](inputElement.value)  
            }
            if(errorMessage) break
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }         

        return !errorMessage
    }


    if(formElement) {
        //Submit fault
        formElement.onsubmit = function (e) {
            e.preventDefault()

            var isFormValid = true

        //Lặp qua từng rule và validate
            options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector)
            var isValid = validate(inputElement, rule)

            if(!isValid) {
                isFormValid = false
            }
        })

        var enableInputs = formElement.querySelectorAll('[name]')
        
        

        if (isFormValid) {
            if (typeof options.onSubmit === 'function') {
                var formValue = Array.from(enableInputs).reduce(function(values, input) {
                    
                    switch(input.type) {
                        case 'radio':
                            if(input.matches(':checked')) {
                                values[input.name] = input.value
                            } 
                            break
                        case 'checkbox':
                            if(!input.matches(':checked')) {
                                values[input.name] = []
                                return values
                            }
                            if(!Array.isArray(values[input.name])) {
                                values[input.name] = []
                            }
                            values[input.name].push(input.value)
                            break
                        case 'file':
                            values[input.name] = input.files
                            break;
                        default:
                            values[input.name] = input.value
                    }
                    return  values
                }, {})
                options.onSubmit({formValue})
            } 
            else {
                formElement.submit()
            }
        } 
        }

        //Xử lý lặp qua mỗi rule và xử lí (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule) {

            //Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector)

            Array.from(inputElements).forEach(function (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule);

                }

                //Xử lí mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector) 

                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            })
        })
    }

}


// Định nghĩa các rules
// Nguyên tắc của các rule
// 1. Khi có lỗi thì tra ra message lỗi
// 2. Khi hợp lệ thì không trả ra cái gì cả (undifine)
Validator.isRequired = function(selector, message) {
    return {
        selector:selector,
        test: function(value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector:selector,
        test: function(value) {
            
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector:selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiếu ${min} kí tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}