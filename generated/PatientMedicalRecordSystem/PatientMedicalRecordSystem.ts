// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddedDoctor extends ethereum.Event {
  get params(): AddedDoctor__Params {
    return new AddedDoctor__Params(this);
  }
}

export class AddedDoctor__Params {
  _event: AddedDoctor;

  constructor(event: AddedDoctor) {
    this._event = event;
  }

  get doctorAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get doctorRegistrationId(): string {
    return this._event.parameters[2].value.toString();
  }

  get dateOfRegistration(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get specialization(): string {
    return this._event.parameters[4].value.toString();
  }

  get hospitalAddress(): Address {
    return this._event.parameters[5].value.toAddress();
  }
}

export class AddedHospital extends ethereum.Event {
  get params(): AddedHospital__Params {
    return new AddedHospital__Params(this);
  }
}

export class AddedHospital__Params {
  _event: AddedHospital;

  constructor(event: AddedHospital) {
    this._event = event;
  }

  get hospitalAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get hospitalRegistrationId(): string {
    return this._event.parameters[2].value.toString();
  }

  get dateOfRegistration(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get email(): string {
    return this._event.parameters[4].value.toString();
  }

  get phoneNumber(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class AddedPatient extends ethereum.Event {
  get params(): AddedPatient__Params {
    return new AddedPatient__Params(this);
  }
}

export class AddedPatient__Params {
  _event: AddedPatient;

  constructor(event: AddedPatient) {
    this._event = event;
  }

  get patientAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get chronicHash(): Array<string> {
    return this._event.parameters[2].value.toStringArray();
  }

  get dob(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get bloodGroup(): string {
    return this._event.parameters[4].value.toString();
  }

  get dateOfRegistration(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get publicKey(): string {
    return this._event.parameters[6].value.toString();
  }

  get vaccinationHash(): Array<string> {
    return this._event.parameters[7].value.toStringArray();
  }

  get phoneNumber(): string {
    return this._event.parameters[8].value.toString();
  }

  get accidentHash(): Array<string> {
    return this._event.parameters[9].value.toStringArray();
  }

  get acuteHash(): Array<string> {
    return this._event.parameters[10].value.toStringArray();
  }
}

export class AddedPublicKey extends ethereum.Event {
  get params(): AddedPublicKey__Params {
    return new AddedPublicKey__Params(this);
  }
}

export class AddedPublicKey__Params {
  _event: AddedPublicKey;

  constructor(event: AddedPublicKey) {
    this._event = event;
  }

  get patientAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get publicKey(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class PatientMedicalRecordSystem__getDoctorDetailsResult {
  value0: string;
  value1: string;
  value2: string;
  value3: Address;

  constructor(value0: string, value1: string, value2: string, value3: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    return map;
  }

  getValue0(): string {
    return this.value0;
  }

  getValue1(): string {
    return this.value1;
  }

  getValue2(): string {
    return this.value2;
  }

  getValue3(): Address {
    return this.value3;
  }
}

export class PatientMedicalRecordSystem__getHospitalDetailsResult {
  value0: string;
  value1: string;
  value2: string;

  constructor(value0: string, value1: string, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    return map;
  }

  getValue0(): string {
    return this.value0;
  }

  getValue1(): string {
    return this.value1;
  }

  getValue2(): string {
    return this.value2;
  }
}

export class PatientMedicalRecordSystem__getMyDetailsResultValue0Struct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get patientAddress(): Address {
    return this[1].toAddress();
  }

  get dob(): BigInt {
    return this[2].toBigInt();
  }

  get phoneNumber(): string {
    return this[3].toString();
  }

  get bloodGroup(): string {
    return this[4].toString();
  }

  get publicKey(): string {
    return this[5].toString();
  }

  get dateOfRegistration(): BigInt {
    return this[6].toBigInt();
  }

  get vaccinationHash(): Array<string> {
    return this[7].toStringArray();
  }

  get accidentHash(): Array<string> {
    return this[8].toStringArray();
  }

  get chronicHash(): Array<string> {
    return this[9].toStringArray();
  }

  get acuteHash(): Array<string> {
    return this[10].toStringArray();
  }
}

export class PatientMedicalRecordSystem__getPatientDetailsResult {
  value0: string;
  value1: string;
  value2: BigInt;

  constructor(value0: string, value1: string, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getValue0(): string {
    return this.value0;
  }

  getValue1(): string {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class PatientMedicalRecordSystem extends ethereum.SmartContract {
  static bind(address: Address): PatientMedicalRecordSystem {
    return new PatientMedicalRecordSystem(
      "PatientMedicalRecordSystem",
      address
    );
  }

  getDoctorDetails(
    _doctorAddress: Address
  ): PatientMedicalRecordSystem__getDoctorDetailsResult {
    let result = super.call(
      "getDoctorDetails",
      "getDoctorDetails(address):(string,string,string,address)",
      [ethereum.Value.fromAddress(_doctorAddress)]
    );

    return new PatientMedicalRecordSystem__getDoctorDetailsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toAddress()
    );
  }

  try_getDoctorDetails(
    _doctorAddress: Address
  ): ethereum.CallResult<PatientMedicalRecordSystem__getDoctorDetailsResult> {
    let result = super.tryCall(
      "getDoctorDetails",
      "getDoctorDetails(address):(string,string,string,address)",
      [ethereum.Value.fromAddress(_doctorAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PatientMedicalRecordSystem__getDoctorDetailsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toAddress()
      )
    );
  }

  getHospitalDetails(
    _hospitalAddress: Address
  ): PatientMedicalRecordSystem__getHospitalDetailsResult {
    let result = super.call(
      "getHospitalDetails",
      "getHospitalDetails(address):(string,string,string)",
      [ethereum.Value.fromAddress(_hospitalAddress)]
    );

    return new PatientMedicalRecordSystem__getHospitalDetailsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString()
    );
  }

  try_getHospitalDetails(
    _hospitalAddress: Address
  ): ethereum.CallResult<PatientMedicalRecordSystem__getHospitalDetailsResult> {
    let result = super.tryCall(
      "getHospitalDetails",
      "getHospitalDetails(address):(string,string,string)",
      [ethereum.Value.fromAddress(_hospitalAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PatientMedicalRecordSystem__getHospitalDetailsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString()
      )
    );
  }

  getMyDetails(): PatientMedicalRecordSystem__getMyDetailsResultValue0Struct {
    let result = super.call(
      "getMyDetails",
      "getMyDetails():((string,address,uint256,string,string,string,uint256,string[],string[],string[],string[]))",
      []
    );

    return changetype<
      PatientMedicalRecordSystem__getMyDetailsResultValue0Struct
    >(result[0].toTuple());
  }

  try_getMyDetails(): ethereum.CallResult<
    PatientMedicalRecordSystem__getMyDetailsResultValue0Struct
  > {
    let result = super.tryCall(
      "getMyDetails",
      "getMyDetails():((string,address,uint256,string,string,string,uint256,string[],string[],string[],string[]))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<PatientMedicalRecordSystem__getMyDetailsResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getOwner(): Address {
    let result = super.call("getOwner", "getOwner():(address)", []);

    return result[0].toAddress();
  }

  try_getOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("getOwner", "getOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPatientDetails(
    _patientAddress: Address
  ): PatientMedicalRecordSystem__getPatientDetailsResult {
    let result = super.call(
      "getPatientDetails",
      "getPatientDetails(address):(string,string,uint256)",
      [ethereum.Value.fromAddress(_patientAddress)]
    );

    return new PatientMedicalRecordSystem__getPatientDetailsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBigInt()
    );
  }

  try_getPatientDetails(
    _patientAddress: Address
  ): ethereum.CallResult<PatientMedicalRecordSystem__getPatientDetailsResult> {
    let result = super.tryCall(
      "getPatientDetails",
      "getPatientDetails(address):(string,string,uint256)",
      [ethereum.Value.fromAddress(_patientAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PatientMedicalRecordSystem__getPatientDetailsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBigInt()
      )
    );
  }

  getPublicKey(_patientAddress: Address): string {
    let result = super.call("getPublicKey", "getPublicKey(address):(string)", [
      ethereum.Value.fromAddress(_patientAddress)
    ]);

    return result[0].toString();
  }

  try_getPublicKey(_patientAddress: Address): ethereum.CallResult<string> {
    let result = super.tryCall(
      "getPublicKey",
      "getPublicKey(address):(string)",
      [ethereum.Value.fromAddress(_patientAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddDoctorDetailsCall extends ethereum.Call {
  get inputs(): AddDoctorDetailsCall__Inputs {
    return new AddDoctorDetailsCall__Inputs(this);
  }

  get outputs(): AddDoctorDetailsCall__Outputs {
    return new AddDoctorDetailsCall__Outputs(this);
  }
}

export class AddDoctorDetailsCall__Inputs {
  _call: AddDoctorDetailsCall;

  constructor(call: AddDoctorDetailsCall) {
    this._call = call;
  }

  get _doctorAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _doctorRegistrationId(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _dateOfRegistration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _specialization(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _hospitalAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class AddDoctorDetailsCall__Outputs {
  _call: AddDoctorDetailsCall;

  constructor(call: AddDoctorDetailsCall) {
    this._call = call;
  }
}

export class AddHospitalDetailsCall extends ethereum.Call {
  get inputs(): AddHospitalDetailsCall__Inputs {
    return new AddHospitalDetailsCall__Inputs(this);
  }

  get outputs(): AddHospitalDetailsCall__Outputs {
    return new AddHospitalDetailsCall__Outputs(this);
  }
}

export class AddHospitalDetailsCall__Inputs {
  _call: AddHospitalDetailsCall;

  constructor(call: AddHospitalDetailsCall) {
    this._call = call;
  }

  get _hospitalAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _hospitalRegistrationId(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _email(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _phoneNumber(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class AddHospitalDetailsCall__Outputs {
  _call: AddHospitalDetailsCall;

  constructor(call: AddHospitalDetailsCall) {
    this._call = call;
  }
}

export class AddPatientDetailsCall extends ethereum.Call {
  get inputs(): AddPatientDetailsCall__Inputs {
    return new AddPatientDetailsCall__Inputs(this);
  }

  get outputs(): AddPatientDetailsCall__Outputs {
    return new AddPatientDetailsCall__Outputs(this);
  }
}

export class AddPatientDetailsCall__Inputs {
  _call: AddPatientDetailsCall;

  constructor(call: AddPatientDetailsCall) {
    this._call = call;
  }

  get _patientAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _category(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _IpfsHash(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class AddPatientDetailsCall__Outputs {
  _call: AddPatientDetailsCall;

  constructor(call: AddPatientDetailsCall) {
    this._call = call;
  }
}

export class RegisterPatientCall extends ethereum.Call {
  get inputs(): RegisterPatientCall__Inputs {
    return new RegisterPatientCall__Inputs(this);
  }

  get outputs(): RegisterPatientCall__Outputs {
    return new RegisterPatientCall__Outputs(this);
  }
}

export class RegisterPatientCall__Inputs {
  _call: RegisterPatientCall;

  constructor(call: RegisterPatientCall) {
    this._call = call;
  }

  get _patientAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _dob(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _phoneNumber(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _bloodGroup(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _publicKey(): string {
    return this._call.inputValues[5].value.toString();
  }
}

export class RegisterPatientCall__Outputs {
  _call: RegisterPatientCall;

  constructor(call: RegisterPatientCall) {
    this._call = call;
  }
}
