export const adminSideMenus = () => [
  {
    title: "Swap Partner",
    icon: "swap_horiz",
    link: "Swap Partner",
  },
  /* MENUS */
  /* Don't remove `MENUS` placeholder. */
  {
    title: "Dashboard",
    icon: "dashboard",
    link: "Dashboard",
  },
  {
    isGroupTitle: true,
    title: "Navigation",
  },
  {
    title: "Analytic",
    icon: "analytics",
    link: "Analytic",
  },

  // {
  //   title: store.$t("menus.members"),
  //   icon: "fas fa-user-tag",
  //   route: "Member Enquiry",
  //   permission: ["members:enquiry", "members:list"],
  //   related: ["/members*", "/enquiry"],
  //   subLinks: [
  //     {
  //       title: store.$t("menus.enquiry"),
  //       route: "Member Enquiry",
  //       permission: "members:enquiry",
  //     },
  //     {
  //       title: store.$t("menus.members"),
  //       route: "Members",
  //       permission: "members:list",
  //     },
  //   ],
  // },
  {
    title: "Register",
    icon: "app_registration",
    link: "Register",
    related: ["/reports/*"],
    subLinks: [
      {
        title: "Sign Up Invitation",
        link: "Sign Up Invitation",
      },
      {
        title: "Sign Up Status Listing",
        link: "Sign Up Status Listing",
      },
      {
        title: "Sign Up Form Review",
        link: "Sign Up Form Review",
      },

      {
        title: "Activation Listing",
        link: "Activation Listing",
      },
      {
        title: "Login Status",
        link: "Login Status",
      },
      {
        title: "Closed Account",
        link: "Closed Account",
      },
    ],
  },
  {
    title: "Document",
    icon: "description",
    link: "Document",
    subLinks: [
      {
        title: "Transaction Listing",
        link: "Transaction Listing",
      },
      {
        title: "Purchase Order",
        link: "Purchase Order",
      },
      {
        title: "Goods Received",
        link: "Goods Received",
      },
      {
        title: "Invoice",
        link: "Invoice",
      },
      {
        title: "Goods Return",
        link: "Goods Return",
      },
      {
        title: "Debit Note",
        link: "Debit Note",
      },
      {
        title: "Credit Note",
        link: "Credit Note",
      },
      {
        title: "Payment Voucher",
        link: "Payment Voucher",
      },
      {
        title: "Bill",
        link: "Bill",
      },
      {
        title: "Fulfillment Report",
        link: "Fulfillment Report",
      },
      {
        title: "Partner Fulfillment Report",
        link: "Partner Fulfillment Report",
      },
    ],
  },
  {
    title: "Master Data",
    icon: "storage",
    link: "Master Data",
    subLinks: [
      {
        title: "Admin Master List",
        link: "Admin Master List",
      },
      {
        title: "Mail Log Screen",
        link: "Mail Log Screen",
      },
      {
        title: "Mail Last Sent",
        link: "Mail Last Sent",
      },
      {
        title: "Partner Master List",
        link: "Partner Master List",
      },
      {
        title: "Store Master List",
        link: "Store Master List",
      },
    ],
  },
  {
    title: "Utilities",
    icon: "build",
    link: "Utilities",
    subLinks: [
      {
        title: "Invoice Matching Rules",
        link: "Invoice Matching Rules",
      },
      {
        title: "Announcement",
        link: "Announcement",
      },
      {
        title: "Customer Status",
        link: "Customer Status",
      },
      {
        title: "Email Notification",
        link: "Email Notification",
      },
      {
        title: "User Setup",
        link: "User Setup",
      },
      {
        title: "User Role Setup",
        link: "User Role Setup",
      },
      {
        title: "FAQ Setup",
        link: "FAQ Setup",
      },
      {
        title: "Custom Message Setup",
        link: "Custom Message Setup",
      },
      {
        title: "Grid Controller Setup",
        link: "Grid Controller Setup",
      },
    ],
  },
  {
    title: "Statement Reviews",
    icon: "rate_review",
    link: "Statement Reviews",
  },
  {
    title: "Partner Profile",
    icon: "account_circle",
    link: "Partner Profile",
  },
  {
    title: "Partner Profile Changelog",
    icon: "history",
    link: "Partner Profile Changelog",
  },
  {
    title: "Business Message",
    icon: "message",
    link: "Business Message",
  },
  {
    title: "Shared Files",
    icon: "folder_shared",
    link: "Shared Files",
  },
  {
    title: "Training",
    icon: "school",
    link: "Training",
    subLinks: [
      {
        title: "Training Invitation",
        link: "Training Invitation",
      },
      {
        title: "Training Setup",
        link: "Training Setup",
      },
      {
        title: "Training Exception",
        link: "Training Exception",
      },
      {
        title: "Training Grouping",
        link: "Training Grouping",
      },
    ],
  },
  {
    title: "Billing",
    icon: "payments",
    link: "Billing",
    subLinks: [
      {
        title: "Billing Terms",
        link: "Billing Terms",
      },
      {
        title: "Billing Invoices",
        link: "Billing Invoices",
      },
      {
        title: "Portal Termination",
        link: "Portal Termination",
      },
      {
        title: "Portal Registration Fee",
        link: "Portal Registration Fee",
      },
      {
        title: "Access Expiry Date",
        link: "Access Expiry Date",
      },
      {
        title: "Portal Billing Report",
        link: "Portal Billing Report",
      },
    ],
  },
  {
    title: "Finance",
    icon: "account_balance",
    link: "Finance",
    subLinks: [
      {
        title: "Partner Document",
        link: "Partner Document",
      },
      {
        title: "Partner Go Live",
        link: "Partner Go Live",
      },
      {
        title: "Pending Go Live Partner",
        link: "Pending Go Live Partner",
      },
      {
        title: "Error Invoice",
        link: "Error Invoice",
      },
      {
        title: "GR Without PO",
        link: "GR Without PO",
      },
    ],
  },
  {
    isGroupTitle: true,
    title: "AIM Center",
  },
  {
    title: "Sign Up History",
    icon: "history_edu",
    link: "Sign Up History",
  },
  {
    title: "Portal Invoice",
    icon: "receipt",
    link: "Portal Invoice",
  },
  {
    isGroupTitle: true,
    title: "Helper",
  },
  {
    title: "FAQ",
    icon: "help",
    link: "FAQ",
  },
  {
    title: "User Guide",
    icon: "menu_book",
    link: "User Guide",
  },
  {
    title: "Contact US",
    icon: "contact_support",
    link: "Contact US",
  },
];
