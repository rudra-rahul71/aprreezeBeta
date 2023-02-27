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
}