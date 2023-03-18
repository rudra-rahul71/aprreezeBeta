import { UserType } from "./enums";

export class Constants {
  public static readonly roleAppraiser = "Appreeze Assesor:Appraiser";
  public static readonly roleRealEstate = "Appreeze Assesor:Real Estate";
  public static readonly roleAttorney = "Appreeze Requestor:Attorney";
  public static readonly roleHomeowner = "Appreeze Requestor:Homeowner";
  public static readonly roleLender = "Appreeze Requestor:Lender";
  public static readonly roleLoanServicer = "Appreeze Requestor:Loan Servicer";
  public static readonly roleRealtor = "Appreeze Requestor:Realtor";

  public static readonly applicationRoles: string[] = [
    Constants.roleAppraiser,
    Constants.roleRealEstate,
    Constants.roleAttorney,
    Constants.roleHomeowner,
    Constants.roleLender,
    Constants.roleLoanServicer,
    Constants.roleRealtor
  ];

  public static readonly assesorRoles: string[] = [
    UserType.Appraiser,
    UserType.RealEstate
  ]

  public static readonly requestorRoles: string[] = [
    UserType.Attorney,
    UserType.Homeowner,
    UserType.Lender,
    UserType.LoanServicer,
    UserType.Realtor
  ]

  public static readonly assesorUserRoles: string[] = [
    this.roleAppraiser,
    this.roleRealEstate
  ]

  public static readonly requestorUserRoles: string[] = [
    this.roleAttorney,
    this.roleHomeowner,
    this.roleLender,
    this.roleLoanServicer,
    this.roleRealtor
  ]

  public static readonly assesorPages: string[] = [
    "Calendar",
    "Wallet"
  ]
  public static readonly requestorPages: string[] = [
    "Insights"
  ]

  public static readonly requestorLabels: any[] = [
    {
      "label" : "Dashboard",
      "path" : "/dashboard",
      "icon" : "home"
    },
    {
      "label" : " My Reports",
      "path" : "/reports",
      "icon" : "find_in_page"
    },
    {
      "label" : "Insights",
      "path" : "/insights",
      "icon" : "insights"
    },
    {
      "label" : "Logout",
      "path" : "/logout",
      "icon" : "exit_to_app"
    }
  ];

  public static readonly assessorLabels: any[] = [
    {
      "label" : "Dashboard",
      "path" : "/dashboard",
      "icon" : "home"
    },
    {
      "label" : " My Reports",
      "path" : "/reports",
      "icon" : "find_in_page"
    },
    {
      "label" : "Calender",
      "path" : "/calendar",
      "icon" : "perm_contact_calendar"
    },
    {
      "label" : "Wallet",
      "path" : "/wallet",
      "icon" : "account_balance"
    },
    {
      "label" : "Logout",
      "path" : "/logout",
      "icon" : "exit_to_app"
    }
  ];
}