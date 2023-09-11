let subscriptionForm
function onCisionBlockProSubscriptionSubmit() {
    const $ = jQuery;
    $.ajax({
        method: 'POST',
        url: cisionBlockProSubscription.ajaxUrl,
        data: {
            params: $(subscriptionForm).serialize(),
            action: 'cision_block_pro_subscribe',
            ...cisionBlockProSubscription.data,
            'g-recaptcha-response': grecaptcha.getResponse(),
        },
        dataType: 'json',
        success: (data) => {
            $('#subscription-success-dialog').dialog()
            console.log(data)
        },
        error: (data) => {
            $('#subscription-failure-dialog').dialog()
            console.log(data)
        },
        complete: () => {
            $(subscriptionForm)[0].reset()
            grecaptcha.reset()
        }
    })
    return false
}
jQuery(document).ready(() => {
    const $ = jQuery;
    $('.subscription-form').on('submit', (e) => {
        e.preventDefault()
        subscriptionForm = e.target
        grecaptcha.execute()
    })
})
