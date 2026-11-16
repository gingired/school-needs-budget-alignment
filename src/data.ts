/** Entire dataset below is synthetic. Never present it as a government record. */
export type Need = 'Classrooms' | 'Teaching personnel' | 'Literacy' | 'Numeracy' | 'Facilities'
export type School = {
  id: string; name: string; division: string; region: string; municipality: string;
  enrollment: number; classrooms: number; requiredClassrooms: number;
  teachers: number; requiredTeachers: number; literacy: number | null; numeracy: number | null;
  facilityGap: boolean; year: number; needs: Need[]
}
export type Funding = {
  id: string; title: string; level: 'School' | 'Division' | 'Region'; scopeId: string;
  year: number; amount: number; category: Need | 'General operations';
  status: 'Programmed' | 'Proposed' | 'Reported allocation'; provenance: string
}
export const NEEDS: Need[] = ['Classrooms','Teaching personnel','Literacy','Numeracy','Facilities']
const prototypes: Array<[string,string,string,string,number,number,number,number,number,number|null,number|null,boolean]> = [
  ['MNL-001','Rizal Elementary School','Manila','NCR',1810,38,49,56,61,62,48,true],
  ['MNL-002','Jacinto Senior High School','Manila','NCR',1160,27,31,39,39,76,53,false],
  ['MNL-003','Binondo Integrated School','Manila','NCR',2240,48,55,72,74,70,68,true],
  ['MNL-004','Maynila Elementary School','Manila','NCR',820,22,22,31,29,82,79,false],
  ['QC-001','Northview Elementary School','Quezon City','NCR',2630,52,68,77,91,51,49,true],
  ['QC-002','Commonwealth Integrated School','Quezon City','NCR',1940,47,51,63,66,69,62,false],
  ['QC-003','Eastwood Public High School','Quezon City','NCR',1380,35,36,48,47,84,77,false],
  ['QC-004','Bagong Pag-asa Elementary School','Quezon City','NCR',970,21,27,29,34,66,55,true],
  ['PSG-001','Pasig Central Elementary School','Pasig City','NCR',1770,36,48,50,60,58,57,true],
  ['PSG-002','Santolan Public High School','Pasig City','NCR',1480,37,39,47,50,72,65,false],
  ['PSG-003','Kapitolyo Integrated School','Pasig City','NCR',1040,28,28,35,35,80,81,false],
  ['PSG-004','Rosario Elementary School','Pasig City','NCR',1320,28,35,40,45,67,58,true],
  ['MKT-001','Poblacion Elementary School','Makati City','NCR',900,24,26,32,31,77,74,false],
  ['MKT-002','Southside Public High School','Makati City','NCR',1690,40,46,55,58,71,59,true],
  ['MKT-003','Guadalupe Integrated School','Makati City','NCR',1420,34,34,45,46,88,82,false],
  ['MKT-004','West Rembo Elementary School','Makati City','NCR',1100,25,32,34,38,64,51,true],
  ['ANT-001','Antipolo Central School','Antipolo City','Region IV-A',2060,43,55,63,71,61,50,true],
  ['ANT-002','Dalig Integrated School','Antipolo City','Region IV-A',1270,29,34,40,43,74,64,false],
  ['ANT-003','San Roque Public High School','Antipolo City','Region IV-A',1590,38,41,48,55,68,57,true],
  ['ANT-004','Mambugan Elementary School','Antipolo City','Region IV-A',840,21,22,29,28,83,76,false],
  ['CAV-001','Bacoor Central School','Bacoor City','Region IV-A',2310,49,61,68,81,57,45,true],
  ['CAV-002','Molino Integrated School','Bacoor City','Region IV-A',1740,39,44,52,59,65,60,false],
  ['CAV-003','Zapote Public High School','Bacoor City','Region IV-A',1280,29,31,40,44,null,54,true],
  ['CAV-004','Queens Row Elementary School','Bacoor City','Region IV-A',1010,26,26,34,34,85,80,false],
]
/** All school names displayed are explicitly labeled as samples; all metrics are invented. */
export const schools: School[] = prototypes.map(([id,,division,region,enrollment,classrooms,requiredClassrooms,teachers,requiredTeachers,literacy,numeracy,facilityGap])=>{
  const needs: Need[]=[]
  if (classrooms<requiredClassrooms) needs.push('Classrooms')
  if (teachers<requiredTeachers) needs.push('Teaching personnel')
  if (literacy!==null && literacy<70) needs.push('Literacy')
  if (numeracy!==null && numeracy<65) needs.push('Numeracy')
  if (facilityGap) needs.push('Facilities')
  return {id,name:`Sample School ${id}`,division,region,municipality:division,enrollment,classrooms,requiredClassrooms,teachers,requiredTeachers,literacy,numeracy,facilityGap,needs,year:2025}
})
export const funding: Funding[] = [
  {id:'F-001',title:'Classroom construction program',level:'Division',scopeId:'Manila',year:2025,amount:84000000,category:'Classrooms',status:'Programmed',provenance:'Synthetic budget extract A'},
  {id:'F-002',title:'Learning support initiative',level:'School',scopeId:'MNL-001',year:2025,amount:620000,category:'Literacy',status:'Reported allocation',provenance:'Synthetic school record B'},
  {id:'F-003',title:'School operations support',level:'School',scopeId:'MNL-004',year:2025,amount:450000,category:'General operations',status:'Programmed',provenance:'Synthetic school record B'},
  {id:'F-004',title:'School building improvements',level:'Division',scopeId:'Quezon City',year:2025,amount:102000000,category:'Classrooms',status:'Programmed',provenance:'Synthetic budget extract A'},
  {id:'F-005',title:'Early numeracy intervention',level:'School',scopeId:'QC-001',year:2025,amount:880000,category:'Numeracy',status:'Proposed',provenance:'Synthetic proposal C'},
  {id:'F-006',title:'Teacher deployment support',level:'Division',scopeId:'Pasig City',year:2025,amount:16800000,category:'Teaching personnel',status:'Programmed',provenance:'Synthetic budget extract A'},
  {id:'F-007',title:'Facility rehabilitation',level:'School',scopeId:'PSG-004',year:2025,amount:1250000,category:'Facilities',status:'Reported allocation',provenance:'Synthetic school record B'},
  {id:'F-008',title:'School facilities support',level:'Division',scopeId:'Makati City',year:2025,amount:26000000,category:'Facilities',status:'Programmed',provenance:'Synthetic budget extract A'},
  {id:'F-009',title:'Reading recovery support',level:'School',scopeId:'MKT-004',year:2025,amount:420000,category:'Literacy',status:'Reported allocation',provenance:'Synthetic school record B'},
  {id:'F-010',title:'Education infrastructure allocation',level:'Region',scopeId:'Region IV-A',year:2025,amount:258000000,category:'Classrooms',status:'Programmed',provenance:'Synthetic regional summary D'},
  {id:'F-011',title:'Literacy enrichment program',level:'School',scopeId:'ANT-001',year:2025,amount:510000,category:'Literacy',status:'Proposed',provenance:'Synthetic proposal C'},
  {id:'F-012',title:'Facilities upgrade initiative',level:'School',scopeId:'CAV-001',year:2025,amount:1830000,category:'Facilities',status:'Reported allocation',provenance:'Synthetic school record B'},
  {id:'F-013',title:'Student learning support',level:'Division',scopeId:'Bacoor City',year:2025,amount:9400000,category:'Numeracy',status:'Programmed',provenance:'Synthetic budget extract A'},
  {id:'F-014',title:'Teaching materials provision',level:'School',scopeId:'MNL-003',year:2024,amount:360000,category:'General operations',status:'Reported allocation',provenance:'Synthetic school record B'},
  {id:'F-015',title:'Math learning recovery',level:'School',scopeId:'PSG-001',year:2025,amount:520000,category:'Numeracy',status:'Reported allocation',provenance:'Synthetic school record B'},
  {id:'F-016',title:'Reading intervention sessions',level:'School',scopeId:'CAV-002',year:2025,amount:275000,category:'Literacy',status:'Proposed',provenance:'Synthetic proposal C'},
]
export const sources = [
  {name:'School profile and resources',origin:'Prototype sample dataset',granularity:'School',year:'2025',state:'Synthetic',description:'Enrollment, classrooms, teachers and facility flags.'},
  {name:'Learning indicators',origin:'Prototype sample dataset',granularity:'School',year:'2025',state:'Synthetic',description:'Illustrative literacy and numeracy indicator values. Not official examination results.'},
  {name:'Budget program records',origin:'Prototype sample dataset',granularity:'School / Division / Region',year:'2024–2025',state:'Synthetic',description:'Illustrative entries for testing matching, scope restrictions and confidence labels.'},
  {name:'Project Bukas',origin:'Department of Education',granularity:'To be verified per dataset',year:'Not connected',state:'Planned',description:'Potential public source for school-level learning and resource indicators; no live connection.'},
  {name:'DBM COMPASS',origin:'Department of Budget and Management',granularity:'To be verified per dataset',year:'Not connected',state:'Planned',description:'Potential budget data source; agency-level or regional figures must not be assigned to schools.'},
  {name:'DepEd STRIDE',origin:'Department of Education',granularity:'Access to be verified',year:'Not connected',state:'Planned',description:'Potential resource deficiency source if extractable data and reuse permissions are available.'}
]
export type FundingAssessment = 'School-specific record' | 'Broader-scope record' | 'No related record'
export function assessFunding(s:School, need:Need):{assessment:FundingAssessment;records:Funding[]} {
  const related = funding.filter(f=>f.year===s.year && f.category===need && (
    (f.level==='School' && f.scopeId===s.id) || (f.level==='Division' && f.scopeId===s.division) || (f.level==='Region' && f.scopeId===s.region)
  ))
  const scoped = related.filter(r=>r.level==='School')
  if(scoped.length) return {assessment:'School-specific record',records:scoped}
  if(related.length) return {assessment:'Broader-scope record',records:related}
  return {assessment:'No related record',records:[]}
}
export const formatNumber = (n:number)=>new Intl.NumberFormat('en-PH').format(n)
export const formatMoney = (n:number)=>new Intl.NumberFormat('en-PH',{style:'currency',currency:'PHP',maximumFractionDigits:0}).format(n)
