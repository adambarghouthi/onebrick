const strings = {
  en: {
    // Head page titles
    home_hd_title: 'One Brick',
    login_hd_title: 'Log In - One Brick',
    signup_hd_title: 'Sign Up - One Brick',
    billing_hd_title: 'Billing - One Brick',
    membership_hd_title: 'Membership - One Brick',
    profile_hd_title: 'Profile - One Brick',

    // Home page
    splash_title: 'One Brick',
    splash_text: 'Rebuilding the poorest homes in Lebanon, one brick at a time.',
    scroll: 'Scroll to learn more',
    story_title: 'Our Story',
    story_text: 'We are three partners who met  while working on a squalor in south east Beirut. We decided to open this organisation to tackle the needy homes in Lebanon.',
    values_title_1: 'Trust',
    values_text_1: 'Your trust is our lifeline. We aim to ensure that every donor is 100% satisfied with our work.',
    values_title_2: 'Transparency',
    values_text_2: 'Knowing the dilemma that donors face when donating to causes in Lebanon due to lack of trust, we aim to offer transparency in all activities we engage in.',
    values_title_3: 'Clarity',
    values_text_3: 'What is the use of transparency if clarity is missing? Clear and concise structure will support our drive for transparency.',
    projects_title: 'Our Projects',
    start_title: 'Start Today',
    start_text: 'Help rebuild forgotten homes.',
    learn_more: 'Lean More',

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
    no_account_yet: 'Don\'t have an account yet?',
    owns_an_account: 'Already have an account?',

    // MembershipList
    psf_membership: 'One Brick Membership',
    psf_membership_meta: 'Choose to support One Brick either monthly or annually.',
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
    dashboard: 'Dashboard',
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
    welcome: 'Welcome to One Brick. We are building the freedom of tomorrow and you are now a crucial part of the journey.',
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
    black_text: 'ساعد في تنشيط الإنتاج الفلسطيني.',

    // Dashboard page titles
    profile_pg_title: 'الملف الشخصي',
    billing_pg_title: 'الدفع',
    membership_pg_title: 'العضوية',

    // PaymentMethodForm
    payment_method: 'طريقة الدفع',
    cardholder: 'إسم صاحب/ة الكرت',
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
    no_account_yet: 'لا تملك حسابا بعد؟',
    owns_an_account: 'هل تملك حسابا من قبل؟',

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
    dashboard: 'الحساب',
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
