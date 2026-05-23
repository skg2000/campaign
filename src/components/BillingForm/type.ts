export interface BillingData {
  companyName: string;
  email: string;
  gstNumber: string;
  panNumber: string;
  premise: string;
  street: string;
  state: string;
  city: string;
  country: string;
  pinCode: string;
}

export interface BillingFormProps {
  onCancel?: () => void;
  onSave?: (data: BillingData) => void;
}
