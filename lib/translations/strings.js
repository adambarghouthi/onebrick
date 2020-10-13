const strings = {
  en: {
    // Head page titles
    home_hd_title: 'Palestinian Social Fund',
    login_hd_title: 'Log In - PSF',
    signup_hd_title: 'Sign Up - PSF',
    billing_hd_title: 'Billing - PSF',
    membership_hd_title: 'Membership - PSF',
    profile_hd_title: 'Profile - PSF',

    // Home page
    splash_title: 'Together, forward',
    splash_text: 'Freedom is not to be requested, it is to be realized.',
    scroll: 'Scroll to learn more',
    green_title: 'Power in our number',
    green_text: 'The PSF is crowdsourced and dedicated to building a network of cooperatives to bring the power of production back to the people.',
    red_title_1: 'Self-sufficiency',
    red_text_1: 'Independent villages through decentralized production.',
    red_title_2: 'Cooperativism',
    red_text_2: 'Equal representation to maintain a flat structure.',
    red_title_3: 'Transparency',
    red_text_3: 'Open source fund activity to lead honest development.',
    black_title: 'Start today',
    black_text: 'Modernize Palestine with financial unity.',
    support_fund: 'Support Fund',

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
    add_card: 'Add Card',

    // PaymentMethodList
    payment_methods: 'Payment Methods',
    expiration_date: 'Expiration date',
    default: 'Default',
    add_new_payment_method: 'Add New Payment Method',
    remove: 'Remove',
    make_default: 'Make default',
    confirm_remove: 'Please confirm the removal of the following card.',

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

    // MembershipSettings
    membership_settings: 'Membership Settings',
    cancel_membership: 'Cancel membership',
    activate_membership: 'Activate membership',
    cancel_membership_secondary: 'Memberships can be reactivated any time after cancellation.',
    activate_membership_secondary: 'Memberships can be cancelled any time after activation.',
    activate: 'Activate',
    cancel: 'Cancel',

    // ChangePasswordForm
    change_password: 'Change Password',
    current_password: 'Current Password',
    new_password: 'New Password',

    // ProfileForm
    profile: 'Profile',

    // API Success Messages
    signup_user_success: 'Sign up successful!',
    create_membership_success: 'Your membership has been created succefully!',
    login_user_success: 'Log in successful!',
    edit_profile_success: 'Your profile was edited successfully!',
    change_password_success: 'Your password was changed successfully!',
    make_default_pm_success: 'Default payment method has been changed successfully!',
    remove_pm_success: 'Payment method removed successfully!',
    create_pm_success: 'Payment method added successfully!',
    edit_sub_success: 'Your membership has been updated successfully!',

    // API Error Messages
    token_expired: 'Oops! Your session has expired!',
    email_not_unique: 'The email you entered belongs to another account.',
    card_declined: 'Your card has been declined.',
    unauthorized: 'Unauthorized.',
    login_user_error: 'Email or password is incorrect.',
    current_password_error: 'The current password you entered is invalid.',

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
    selected: 'Selected',
    submit: 'Submit',
    support: 'Support',
    save: 'Save',
    back: 'Back',
    thank_you: 'Thank you very much for your support',
    welcome: 'Welcome to the PSF. We are building the freedom of tomorrow and you are now a crucial part of the journey.',
    view_dashboard: 'View Dashboard',
    no_data: 'No data',
    yes: 'Yes',
    no: 'No'
  },
  ar: {
    // Head page titles
    home_hd_title: 'الصندوق الاجتماعي الفلسطيني',
    login_hd_title: 'دخول - الصندوق الاجتماعي الفلسطيني',
    signup_hd_title: 'إنضمام - الصندوق الاجتماعي الفلسطيني',
    billing_hd_title: 'الدفع - الصندوق الاجتماعي الفلسطيني',
    membership_hd_title: 'العضوية - الصندوق الاجتماعي الفلسطيني',
    profile_hd_title: 'الملف الشخصي - الصندوق الاجتماعي الفلسطيني',

    // Home page
    splash_title: 'معاً إلى الأمام',
    splash_text: 'الحرية لا تُطلب بل تُحقق.',
    scroll: 'النزول لمعرفة المزيد',
    green_title: 'القوة في أعدادنا',
    green_text: 'الصندوق الاجتماعي الفلسطيني هو التعهيد الجماعي ومخصص لبناء شبكة من التعاونيات لإعادة قوة الإنتاج إلى المجتمع الفلسطيني.',
    red_title_1: 'الاكتفاء الذاتي',
    red_text_1: 'القرى المستقلة من خلال الإنتاج اللامركزي.',
    red_title_2: 'التعاونية',
    red_text_2: 'تمثيل متساوٍ للحفاظ على هيكل مستو.',
    red_title_3: 'الشفافية',
    red_text_3: 'نشاط صندوق مفتوح المصدر لقيادة تنمية مخلصة.',
    black_title: 'دعم الآن',
    black_text: 'تحديث فلسطين بالوحدة المالية.',
    support_fund: 'دعم الصندوق',

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
    add_card: 'إضافة الكرت',

    // PaymentMethodList
    payment_methods: 'طرق الدفع',
    expiration_date: 'تاريخ الإنتهاء',
    default: 'المستخدم',
    add_new_payment_method: 'إضافة طريقة دفع جديدة',
    remove: 'حذف',
    make_default: 'جعله الكرت المستخدم',
    confirm_remove: 'الرجاء تأكيد حذف الكرت التالي.',

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
    per_month: 'شهريا',
    per_year: 'سنويا',
    currency_disclaimer: 'التسعير بالدولار الأمريكي.',

    // MembershipSettings
    membership_settings: 'إعدادات العضوية',
    cancel_membership: 'توقيف العضوية',
    activate_membership: 'تفعيل العضوية',
    cancel_membership_secondary: 'يمكن إعادة تغعيل العضوية في أي وقت بعد التوقف.',
    activate_membership_secondary: 'يمكن إيقاف العضوية في أي وقت بعد التفعيل.',
    activate: 'تفعيل',
    cancel: 'توقيف',

    // ChangePasswordForm
    change_password: 'تعديل كلمة السر',
    current_password: 'كلمة السر الحالية',
    new_password: 'كلمة السر الجديدة',

    // ProfileForm
    profile: 'الملف الشخصي',

    // API Success Messages
    signup_user_success: 'تم إنشاء الإنضمام بنجاح!',
    create_membership_success: 'تم إنشاء العضوية بنجاح!',
    login_user_success: 'تم تسجيل الدخول بنجاح!',
    edit_profile_success: 'تم احتفاظ الملف بنجاح!',
    change_password_success: 'تم تعديل كلمة السر بنجاح!',
    make_default_pm_success: 'تم تغيير الكرت المستخدم بنجاح!',
    remove_pm_success: 'تم حذف الكرت بنجاح!',
    create_pm_success: 'تم إضافة الكرت بنجاح!',
    edit_sub_success: 'تم تعديل العضوية بنجاح!',

    // API Error Messages
    token_expired: 'عفوًا، لقد انتهت جلستك.',
    email_not_unique: 'البريد الإلكتروني الذي تم إدخاله ينتمي إلى حساب آخر.',
    card_declined: 'تم رفض كرت الدفع.',
    unauthorized: 'غير مصرح.',
    login_user_error: 'البريد الالكتروني او كلمة السر غير صحيحة.',
    current_password_error: 'كلمة السر الحالية التي تم إدخالها غير صالحة.',

    // Miscellaneaous
    email: 'البريد الإلكتروني',
    password: 'كلمة السر',
    monthly: 'شهري',
    yearly: 'سنوي',
    login: 'دخول',
    logout: 'خروج',
    signup: 'إنضمام',
    membership: 'عضوية',
    payment: 'دفع',
    confirm: 'تأكيد',
    reset: 'إعادة تعيين',
    select: 'اختيار',
    selected: 'مختار',
    support: 'دعم',
    save: 'احتفاظ',
    back: 'عودة',
    thank_you: 'شكرا جزيلا على الدعم',
    welcome: 'مرحبا بك في الصندوق الاجتماعي الفلسطيني. نحن نبني حرية الغد وأنت الآن جزء أساسي من الرحلة.',
    view_dashboard: 'عرض الملف',
    no_data: 'لايوجد بيانات',
    yes: 'نعم',
    no: 'لا'
  }
}

export default strings
