import { WindowsEdition, WindowsMenuItem } from '../types';
import { OFFICE_LANGUAGES } from './office';

// --- HELPER FOR WINDOWS FILES ---
const generateWindowsFiles = (productSlug: string, version: string) => {
    return OFFICE_LANGUAGES.map(lang => ({
        language: lang.name,
        arch: 'x64' as const,
        sha256: `SHA256_${productSlug.toUpperCase()}_${version.toUpperCase()}_${lang.code.toUpperCase()}_${Math.random().toString(36).substring(7)}`, // Placeholder Hash
        filename: `${lang.code}_${productSlug}_${version}_x64.iso`,
        link: '#'
    }));
};

// --- WINDOWS MENU DATA ---
export const WINDOWS_MENU: WindowsMenuItem[] = [
    {
        id: 'win-11',
        title: 'Windows 11',
        faqs: [
            {
                question: 'Làm sao tôi có thể xác minh xem những tập tin này có phải là thật hay không?',
                answer: 'Tất cả các tệp ISO được cung cấp đều là tệp gốc từ Microsoft (MSDN). Bạn có thể xác minh tính toàn vẹn của tệp bằng cách so sánh mã băm SHA-256 được cung cấp với mã băm chính thức từ Microsoft.'
            },
            {
                question: 'Phiên bản ISO dành cho người tiêu dùng bao gồm tất cả các phiên bản...',
                answer: 'Đúng vậy. Phiên bản "Consumer Editions" chứa: Home, Home N, Education, Education N, Pro, Pro N. Phiên bản "Business Editions" chứa: Education, Enterprise, Pro, Pro for Workstations.'
            },
            {
                question: 'Làm thế nào để bỏ qua yêu cầu kết nối Internet và tài khoản Microsoft trên Windows 11?',
                answer: 'Tại màn hình "Let\'s connect you to a network", nhấn **Shift + F10** để mở CMD, sau đó gõ `OOBE\\BYPASSNRO` và nhấn Enter. Máy sẽ khởi động lại và xuất hiện tùy chọn "I don\'t have internet".'
            },
            {
                question: 'Làm thế nào để cài đặt sạch Windows 11 IoT Enterprise 25H2 bằng ngôn ngữ không phải tiếng Anh?',
                answer: 'Hiện tại bản IoT Enterprise 25H2 chủ yếu có tiếng Anh. Bạn có thể cài bản tiếng Anh trước, sau đó vào Settings > Time & Language > Language để tải gói ngôn ngữ mong muốn.'
            },
            {
                question: 'Làm thế nào để cài đặt Windows 11 trên phần cứng không được hỗ trợ?',
                answer: 'Bạn có thể sử dụng công cụ **Rufus** để tạo USB cài đặt. Trong Rufus, chọn tùy chọn "Remove hardware requirements (TPM 2.0, Secure Boot, RAM)" khi bấm Start.'
            }
        ],
        subcategories: [
            {
                id: 'win-11-editions',
                title: 'Phiên bản',
                items: [
                    { id: 'win-11-consumer-26h1', name: 'Windows 11 Consumer 26H1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_consumer', '26h1') }] },
                    { id: 'win-11-business-26h1', name: 'Windows 11 Business 26H1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_business', '26h1') }] },
                    { id: 'win-11-consumer-25h2', name: 'Windows 11 Consumer 25H2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_consumer', '25h2') }] },
                    { id: 'win-11-business-25h2', name: 'Windows 11 Business 25H2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_business', '25h2') }] },
                ]
            }
        ]
    },
    {
        id: 'win-10',
        title: 'Windows 10',
        faqs: [
            {
                question: 'Các bản cập nhật Windows 10 sau khi hết hạn hỗ trợ?',
                answer: 'Windows 10 sẽ kết thúc hỗ trợ vào ngày 14/10/2025. Sau thời điểm này, Microsoft sẽ không cung cấp các bản cập nhật bảo mật miễn phí cho người dùng cá nhân (trừ LTSC).'
            },
            {
                question: 'Làm sao tôi có thể xác minh xem những tập tin này có phải là thật hay không?',
                answer: 'Bạn có thể kiểm tra mã SHA-256 của file tải về và so sánh với mã hiển thị trên website này.'
            },
            {
                question: 'Sự khác biệt giữa bản Consumer và Business?',
                answer: 'Bản Consumer phù hợp cho người dùng cá nhân (Home/Pro). Bản Business dành cho doanh nghiệp (Enterprise/Education) và thường yêu cầu kích hoạt qua KMS hoặc Volume License.'
            }
        ],
        subcategories: [
            {
                id: 'win-10-editions',
                title: 'Phiên bản',
                items: [
                    { id: 'win-10-consumer-22h2', name: 'Windows 10 Consumer 22H2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win10_consumer', '22h2') }] },
                    { id: 'win-10-business-22h2', name: 'Windows 10 Business 22H2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win10_business', '22h2') }] },
                ]
            }
        ]
    },
    {
        id: 'win-ltsc',
        title: 'Windows LTSC',
        faqs: [
            {
                question: 'LTSC là gì, và liệu đó có phải là lựa chọn phù hợp với bạn?',
                answer: 'LTSC (Long-Term Servicing Channel) là phiên bản Windows ổn định dài hạn, không có các ứng dụng rác (Bloatware), Store hay Edge. Nó được thiết kế cho các hệ thống quan trọng cần sự ổn định cao. Nếu bạn cần một Windows nhẹ, mượt và ít cập nhật tính năng, LTSC là lựa chọn tuyệt vời.'
            },
            {
                question: 'Cài đặt ứng dụng Microsoft Store trên LTSC?',
                answer: 'Mặc định LTSC không có Store. Bạn có thể cài đặt thủ công bằng cách tải gói cài đặt Store từ GitHub (ví dụ: dự án LTSC-Add-MicrosoftStore).'
            },
            {
                question: 'Sự khác biệt giữa Windows Enterprise LTSC hỗ trợ IoT và không hỗ trợ IoT?',
                answer: 'Về cơ bản chúng giống nhau về tính năng. Tuy nhiên, bản **IoT Enterprise LTSC** có chu kỳ hỗ trợ dài hơn (10 năm so với 5 năm của bản Enterprise LTSC thông thường) và hỗ trợ HWID activation.'
            },
            {
                question: 'Làm thế nào để nâng cấp từ phiên bản không phải LTSC lên LTSC?',
                answer: 'Bạn không thể nâng cấp trực tiếp (Upgrade) từ bản Home/Pro lên LTSC và giữ lại ứng dụng. Bạn cần cài đặt mới (Clean Install) hoặc sử dụng các thủ thuật nâng cao (không khuyến khích).'
            }
        ],
        subcategories: [
            {
                id: 'win-ltsc-versions',
                title: 'Phiên bản',
                items: [
                    { id: 'win-11-ltsc-2024', name: 'Windows 11 LTSC 2024', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_ltsc', '2024') }] },
                    { id: 'win-10-ltsc-2021', name: 'Windows 10 LTSC 2021', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win10_ltsc', '2021') }] },
                    { id: 'win-10-ltsc-2019', name: 'Windows 10 LTSC 2019', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win10_ltsc', '2019') }] },
                    { id: 'win-10-ltsb-2016', name: 'Windows 10 LTSB 2016', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win10_ltsb', '2016') }] },
                    { id: 'win-10-ltsb-2015', name: 'Windows 10 LTSB 2015', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win10_ltsb', '2015') }] },
                ]
            }
        ]
    },
    {
        id: 'win-arm64',
        title: 'Windows ARM64',
        faqs: [
            {
                question: 'Bạn cần bộ xử lý (CPU) ARM64 để cài đặt hệ điều hành Windows kiến trúc ARM64.',
                answer: 'Đúng vậy. Phiên bản này chỉ hoạt động trên các thiết bị sử dụng chip ARM (ví dụ: Surface Pro X, Lenovo ThinkPad X13s, hoặc máy Mac chạy Apple Silicon qua Parallels Desktop).'
            },
            {
                question: 'Làm sao tôi có thể xác minh xem những tập tin này có phải là thật hay không?',
                answer: 'Vui lòng kiểm tra mã SHA-256 đi kèm với mỗi file tải về.'
            }
        ],
        subcategories: [
            {
                id: 'win-arm64-editions',
                title: 'Phiên bản',
                items: [
                    { id: 'win-arm-consumer-26h1', name: 'Windows 11 Consumer 26H1 (ARM)', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_arm_consumer', '26h1') }] },
                    { id: 'win-arm-business-26h1', name: 'Windows 11 Business 26H1 (ARM)', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_arm_business', '26h1') }] },
                    { id: 'win-arm-consumer-25h2', name: 'Windows 11 Consumer 25H2 (ARM)', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_arm_consumer', '25h2') }] },
                    { id: 'win-arm-business-25h2', name: 'Windows 11 Business 25H2 (ARM)', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_arm_business', '25h2') }] },
                    { id: 'win-arm-iot-25h2', name: 'Windows 11 IoT Enterprise 25H2 (ARM)', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_arm_iot', '25h2') }] },
                    { id: 'win-arm-iot-ltsc', name: 'Windows 11 IoT Enterprise LTSC 2024 (ARM)', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win11_arm_iot_ltsc', '2024') }] },
                ]
            }
        ]
    },
    {
        id: 'win-server',
        title: 'Windows Server',
        faqs: [
            {
                question: 'Windows Server có miễn phí không?',
                answer: 'Microsoft cung cấp bản dùng thử (Evaluation) miễn phí 180 ngày. Sau đó bạn cần mua bản quyền hoặc kích hoạt để tiếp tục sử dụng đầy đủ tính năng.'
            },
            {
                question: 'Kích hoạt Windows Server như thế nào?',
                answer: 'Bạn có thể sử dụng key bản quyền chính hãng (Retail/MAK) hoặc kích hoạt qua KMS server nếu là doanh nghiệp. Các bản Evaluation cần được convert sang bản Retail trước khi kích hoạt bằng key.'
            }
        ],
        subcategories: [
            {
                id: 'win-server-versions',
                title: 'Phiên bản',
                items: [
                    { id: 'win-server-2025', name: 'Windows Server 2025', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('server', '2025') }] },
                    { id: 'win-server-23h2', name: 'Windows Server 23h2 (No GUI)', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('server', '23h2') }] },
                    { id: 'win-server-2022', name: 'Windows Server 2022', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('server', '2022') }] },
                    { id: 'win-server-2019', name: 'Windows Server 2019', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('server', '2019') }] },
                    { id: 'win-server-2016', name: 'Windows Server 2016', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('server', '2016') }] },
                    { id: 'win-server-2012r2', name: 'Windows Server 2012 R2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('server', '2012r2') }] },
                    { id: 'win-server-2008r2', name: 'Windows Server 2008 R2 SP1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('server', '2008r2') }] },
                    { id: 'win-server-2008', name: 'Windows Server 2008 SP2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('server', '2008') }] },
                ]
            }
        ]
    },
    {
        id: 'win-81',
        title: 'Windows 8.1',
        faqs: [
            {
                question: 'Windows 8.1 còn được hỗ trợ không?',
                answer: 'Windows 8.1 đã chính thức kết thúc hỗ trợ vào ngày 10/01/2023. Bạn sẽ không còn nhận được các bản vá bảo mật, vì vậy hãy cân nhắc nâng cấp lên Windows 10 hoặc 11 để đảm bảo an toàn.'
            },
            {
                question: 'Làm sao để kích hoạt Windows 8.1?',
                answer: 'Bạn có thể sử dụng key bản quyền hoặc các công cụ kích hoạt KMS phổ biến.'
            }
        ],
        subcategories: [
            {
                id: 'win-81-category1',
                title: 'Loại bản',
                items: [
                    { id: 'win-81-update3', name: 'Windows 8.1 with Update 3', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win81', 'up3') }] },
                    { id: 'win-81-n-update3', name: 'Windows 8.1 N with Update 3', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win81_n', 'up3') }] },
                    { id: 'win-embedded-81', name: 'Windows Embedded 8.1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win81_embedded', 'up3') }] },
                ]
            },
            {
                id: 'win-81-category2',
                title: 'Phiên bản chi tiết',
                items: [
                    { id: 'win-81-core-pro', name: 'Windows 8.1 Core / Pro', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win81', 'core_pro') }] },
                    { id: 'win-81-pro-vl', name: 'Windows 8.1 Professional (VL)', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win81', 'pro_vl') }] },
                    { id: 'win-81-enterprise', name: 'Windows 8.1 Enterprise', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win81', 'enterprise') }] },
                ]
            }
        ]
    },
    {
        id: 'win-8',
        title: 'Windows 8',
        faqs: [
            {
                question: 'Tại sao tôi nên dùng Windows 8.1 thay vì Windows 8?',
                answer: 'Windows 8 là phiên bản cũ và có nhiều bất tiện về giao diện (không có nút Start truyền thống). Windows 8.1 là bản nâng cấp hoàn thiện hơn, ổn định hơn và sửa chữa nhiều lỗi của Windows 8.'
            }
        ],
        subcategories: [
            {
                id: 'win-8-editions',
                title: 'Phiên bản',
                items: [
                    { id: 'win-8-pro', name: 'Windows 8 Pro', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win8', 'pro') }] },
                    { id: 'win-8-enterprise', name: 'Windows 8 Enterprise', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win8', 'enterprise') }] },
                ]
            }
        ]
    },
    {
        id: 'win-7',
        title: 'Windows 7',
        faqs: [
            {
                question: 'Windows 7 còn an toàn không?',
                answer: 'Windows 7 đã ngừng hỗ trợ từ 14/01/2020. Việc sử dụng nó tiềm ẩn rủi ro bảo mật lớn. Chỉ nên sử dụng cho các máy tính offline hoặc chạy phần mềm chuyên dụng cũ.'
            },
            {
                question: 'Làm thế nào để cài driver cho Windows 7?',
                answer: 'Các máy tính đời mới (chip Intel gen 6 trở lên) thường không hỗ trợ driver cho Windows 7. Bạn cần tìm các bản Ghost hoặc bộ cài đã tích hợp sẵn driver USB 3.0 và NVMe.'
            }
        ],
        subcategories: [
            {
                id: 'win-7-category1',
                title: 'Loại bản',
                items: [
                    { id: 'win-7-sp1', name: 'Windows 7 Service Pack 1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7', 'sp1') }] },
                    { id: 'win-7-n-sp1', name: 'Windows 7 N Service Pack 1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7_n', 'sp1') }] },
                    { id: 'win-embedded-7', name: 'Windows Embedded Standard 7', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7_embedded', 'sp1') }] },
                ]
            },
            {
                id: 'win-7-category2',
                title: 'Phiên bản chi tiết',
                items: [
                    { id: 'win-7-ultimate', name: 'Windows 7 Ultimate SP1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7', 'ultimate') }] },
                    { id: 'win-7-enterprise', name: 'Windows 7 Enterprise SP1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7', 'enterprise') }] },
                    { id: 'win-7-pro', name: 'Windows 7 Professional SP1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7', 'pro') }] },
                    { id: 'win-7-pro-vl', name: 'Windows 7 Professional VL SP1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7', 'pro_vl') }] },
                    { id: 'win-7-home-premium', name: 'Windows 7 Home Premium SP1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7', 'home_prem') }] },
                    { id: 'win-7-home-basic', name: 'Windows 7 Home Basic SP1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7', 'home_basic') }] },
                    { id: 'win-7-starter', name: 'Windows 7 Starter SP1', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('win7', 'starter') }] },
                ]
            }
        ]
    },
    {
        id: 'win-vista',
        title: 'Windows Vista',
        faqs: [
            {
                question: 'Windows Vista yêu cầu cấu hình như thế nào?',
                answer: 'Vista khá nặng so với XP thời đó, nhưng với máy tính hiện nay thì nó rất nhẹ. Tuy nhiên, khả năng tương thích phần mềm của nó rất kém, ít trình duyệt web còn hỗ trợ.'
            }
        ],
        subcategories: [
            {
                id: 'win-vista-category1',
                title: 'Loại bản',
                items: [
                    { id: 'win-vista-sp2', name: 'Windows Vista SP2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('vista', 'sp2') }] },
                    { id: 'win-vista-n-kn', name: 'Windows Vista N, KN SP2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('vista', 'n_kn') }] },
                ]
            },
            {
                id: 'win-vista-category2',
                title: 'Phiên bản chi tiết',
                items: [
                    { id: 'win-vista-ultimate', name: 'Windows Vista Ultimate SP2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('vista', 'ultimate') }] },
                    { id: 'win-vista-business-vl', name: 'Windows Vista Business (VL) SP2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('vista', 'business_vl') }] },
                    { id: 'win-vista-enterprise', name: 'Windows Vista Enterprise SP2', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('vista', 'enterprise') }] },
                ]
            }
        ]
    },
    {
        id: 'win-xp',
        title: 'Windows XP',
        faqs: [
            {
                question: 'Tôi có thể lướt web trên Windows XP không?',
                answer: 'Rất khó. Hầu hết các trình duyệt hiện đại (Chrome, Firefox, Edge) đều không còn hỗ trợ XP. Bạn chỉ có thể dùng các trình duyệt cũ (như MyPal) nhưng sẽ gặp lỗi bảo mật và hiển thị sai lệch trên các web mới.'
            }
        ],
        subcategories: [
            {
                id: 'win-xp-editions',
                title: 'Phiên bản',
                items: [
                    { id: 'win-xp-pro', name: 'Windows XP Professional SP3', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('xp', 'pro') }] },
                    { id: 'win-xp-home', name: 'Windows XP Home Edition SP3', releases: [{ id: 'latest', title: 'Latest Release', files: generateWindowsFiles('xp', 'home') }] },
                ]
            }
        ]
    }
];

export const WIN11_EDITIONS: WindowsEdition[] = [
    {
        id: 'consumer',
        title: 'Windows 11 Consumer',
        subTitle: '25H2',
        buildVersion: 'Build - 26200.7623 (Feb 2026)',
        isoList: []
    }
];

export const WIN10_EDITIONS: WindowsEdition[] = [
    {
        id: 'consumer',
        title: 'Windows 10 Consumer',
        subTitle: '22H2',
        buildVersion: 'Build - 19045.6456 (Oct 2025)',
        isoList: []
    }
];

export const MACOS_SEQUOIA_EDITIONS: WindowsEdition[] = [
    {
        id: 'installer',
        title: 'macOS Sequoia Installer',
        subTitle: '15.0',
        buildVersion: 'Build - 24A335',
        isoList: []
    }
];

export const UBUNTU_EDITIONS: WindowsEdition[] = [
    {
        id: 'desktop',
        title: 'Ubuntu Desktop',
        subTitle: '24.04 LTS',
        buildVersion: 'Noble Numbat',
        isoList: []
    }
];
