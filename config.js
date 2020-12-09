module.exports = {
  clientId: '3f0b6549-c83d-40bd-8da7-d3d53061d622', // Make sure to set your environment up correctly when starting/building
  scope: 'patient/Condition.read patient/MedicationAdministration.read patient/MedicationOrder.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read',
  iss: 'https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d',
  redirectUri: 'http://localhost:3000/',
};
