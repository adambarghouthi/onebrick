const strings = {
  en: {
    // Head page titles
    home_hd_title: 'Palestinian Social Fund',
    login_hd_title: 'Log In - PSF',
    signup_hd_title: 'Sign Up - PSF',
    billing_hd_title: 'Billing - PSF',
    membership_hd_title: 'Membership - PSF',
    profile_hd_title: 'Profile - PSF',

    // Dashboard page titles
    profile_pg_title: 'Profile',
    billing_pg_title: 'Billing',
    membership_pg_title: 'Membership',

    // PaymentMethodForm
    payment_method: 'Payment Method',
    cardholder: 'Cardholder Name',
    country: 'Country',
    credit_card: 'Credit Card',
    support_now: 'Support now',
    cardholder_error: 'Please input cardholder name.',
    country_error: 'Please input your country.',

    // PaymentMethodList
    payment_method_list: 'Payment Method List',
    expiration_date: 'Expiration date',
    default: 'Default',
    add_new_payment_method: 'Add New Payment Method',
    remove: 'Remove',
    set_default: 'Set default',

    // BillingSummary
    summary: 'Summary',
    billing_mode: 'Billing Mode',
    cover_processing_fee: 'Cover processing fee',
    price: 'Price',

    // LoginForm / SignupForm
    please_input: 'Please input your',
    please_confirm: 'Please confirm your',
    create_new_account: 'Create a new account',
    email_invalid_error: 'Please use a valid email address.',
    password_match_error: 'The two passwords do not match.',
    password_length_error: 'Your password must be 8 characters or more.',

    // MembershipList
    psf_membership: 'Palestinian Social Fund Membership',
    psf_membership_meta: 'Choose to support the PSF either monthly or annually.',
    cancel_or_edit: 'Cancel or edit anytime',
    view_activity: 'View fund activity',
    receive_updates: 'Receive fund updates',
    support_monthly: 'Support monthly',
    support_yearly: 'Support yearly',
    per_month: 'per month',
    per_year: 'per year',
    currency_disclaimer: 'Pricing is in USD.',

    // ChangePasswordForm
    change_password: 'Change Password',
    current_password: 'Current Password',
    new_password: 'New Password',

    // ProfileForm
    profile: 'Profile',

    // API Success Messages
    signup_success: 'Sign up successful!',
    membership_success: 'Your membership has been created succefully!',
    login_success: 'Log in successful!',
    profile_form_success: 'Your profile was edited successfully!',

    // API Error Messages
    token_expired: 'Oops! Your session has expired!',
    email_not_unique: 'The email you entered belongs to another account.',
    card_declined: 'Your card has been declined.',
    unauthorized: 'Unauthorized.',
    login_error: 'Email or password is incorrect.',

    // Miscellaneaous
    email: 'Email',
    password: 'Password',
    monthly: 'Monthly',
    yearly: 'Yearly',
    login: 'Log In',
    logout: 'Log Out',
    signup: 'Sign Up',
    membership: 'Membership',
    payment: 'Payment',
    confirm: 'Confirm',
    reset: 'Reset',
    select: 'Select',
    submit: 'Submit',
    support: 'Support',
    save: 'Save',
    back: 'Back',
    thank_you: 'Thank you very much for your support',
    welcome: 'Welcome to the PSF. We are building the freedom of tomorrow and you are now a crucial part of the journey.',
    view_dashboard: 'View Dashboard'
  },
  ar: {
    // Head page titles
    home_hd_title: 'الصندوق الاجتماعي الفلسطيني',
    login_hd_title: 'دخول - الصندوق الاجتماعي الفلسطيني',
    signup_hd_title: 'إنضمام - الصندوق الاجتماعي الفلسطيني',
    billing_hd_title: 'الدفع - الصندوق الاجتماعي الفلسطيني',
    membership_hd_title: 'العضوية - الصندوق الاجتماعي الفلسطيني',
    profile_hd_title: 'الملف الشخصي - الصندوق الاجتماعي الفلسطيني',

    // Dashboard page titles
    profile_pg_title: 'الملف الشخصي',
    billing_pg_title: 'الدفع',
    membership_pg_title: 'العضوية',

    // PaymentMethodForm
    payment_method: 'طريقة الدفع',
    cardholder: 'إسم صاحب الكرت',
    country: 'البلد',
    credit_card: 'رقم الكرت',
    support_now: 'دعم الآن',
    cardholder_error: 'الرجاء إدخال اسم حامل الكرت.',
    country_error: 'الرجاء إدخال اسم البلد.',

    // PaymentMethodList
    payment_method_list: 'قائمة طرق الدفع',
    expiration_date: 'تاريخ الإنتهاء',
    default: 'الحالي',
    add_new_payment_method: 'إضافة طريقة دفع جديدة',
    remove: 'حذف',
    set_default: 'جعله الكرت الحالي',

    // BillingSummary
    summary: 'ملخص',
    billing_mode: 'زمن الدفع',
    cover_processing_fee: 'تغطية رسوم المعاملة',
    price: 'السعر',

    // LoginForm / SignupForm
    please_input: 'الرجاء إدخال',
    please_confirm: 'الرجاء تأكيد',
    create_new_account: 'فتح حساب جديد',
    email_invalid_error: 'الرجاء استخدام بريد إلكتروني صالح.',
    password_match_error: 'الكلمتان السريتان لا يتطابقان.',
    password_length_error: 'يجب أن تتكون كلمة السر من 8 أحرف أو أكثر.',

    // MembershipList
    psf_membership: 'عضوية الصندوق الاجتماعي الفلسطيني',
    psf_membership_meta: 'يمكن دعم الصندوق الاجتماعي الفلسطيني شهريًا أو سنويًا.',
    cancel_or_edit: 'للإلغاء أو التعديل في أي وقت',
    view_activity: 'للاطلاع على نشاط الصندوق',
    receive_updates: 'لتلقي تحديثات الصندوق',
    per_month: 'كل شهر',
    per_year: 'كل سنة',
    currency_disclaimer: 'التسعير بالدولار الأمريكي.',

    // ChangePasswordForm
    change_password: 'تعديل كلمة السر',
    current_password: 'كلمة السر الحالية',
    new_password: 'كلمة السر الجديدة',

    // ProfileForm
    profile: 'الملف الشخصي',

    // API Success Messages
    signup_success: 'تم إنشاء الإنضمام بنجاح!',
    membership_success: 'تم إنشاء العضوية بنجاح!',
    login_success: 'تم تسجيل الدخول بنجاح!',
    profile_form_success: 'تم تعديل الملف بنجاح!',

    // API Error Messages
    token_expired: 'عفوًا، لقد انتهت جلستك!',
    email_not_unique: 'البريد الإلكتروني الذي تم إدخاله ينتمي إلى حساب آخر.',
    card_declined: 'تم رفض كرت الدفع.',
    unauthorized: 'غير مصرح.',
    login_error: 'البريد الالكتروني او كلمة السر غير صحيحة.',

    // Miscellaneaous
    email: 'البريد الإلكتروني',
    password: 'كلمة السر',
    monthly: 'شهري',
    yearly: 'سنوي',
    login: 'دخول',
    logout: 'خروج',
    signup: 'إنضمام',
    membership: 'عضوية',
    payment: 'دفعة',
    confirm: 'تأكيد',
    reset: 'إعادة تعيين',
    select: 'اختيار',
    support: 'دعم',
    save: 'احتفاظ',
    back: 'عودة',
    thank_you: 'شكرا جزيلا على الدعم',
    welcome: 'مرحبا بك في الصندوق الاجتماعي الفلسطيني. نحن نبني حرية الغد وأنت الآن جزء أساسي من الرحلة.',
    view_dashboard: 'عرض الملف',
    billing: 'الدفع'
  }
}

export default strings
