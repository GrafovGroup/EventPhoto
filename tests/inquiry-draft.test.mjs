import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readDraft,DRAFT_TTL} from '../lib/inquiry-draft.ts';
const now=Date.now();
const draft={id:'12345678-test',updatedAt:now,values:{name:'Alex',email:'alex@example.com',city:'Montréal',province:'quebec',details:'Panel and reception',service:'conference-photography'},expanded:true,fileCount:2,context:'city=Toronto&province=ontario'};
test('quote details and source context survive a language-switch round trip',()=>{const result=readDraft(JSON.stringify(draft),now);assert.deepEqual(result,draft);assert.equal(result.values.city,'Montréal');assert.equal(result.context,'city=Toronto&province=ontario');});
test('expired, future and malformed drafts cannot replace the form',()=>{assert.equal(readDraft('invalid',now),null);assert.equal(readDraft(JSON.stringify({...draft,updatedAt:now-DRAFT_TTL-1}),now),null);assert.equal(readDraft(JSON.stringify({...draft,updatedAt:now+120000}),now),null);assert.equal(readDraft(null,now),null);});
test('unknown fields and oversized draft values are excluded',()=>{const result=readDraft(JSON.stringify({...draft,values:{...draft.values,unknown:'unsafe',websiteConfirmation:'spam',details:'x'.repeat(6000)},fileCount:99}),now);assert.equal(result.values.unknown,undefined);assert.equal(result.values.websiteConfirmation,undefined);assert.equal(result.values.details.length,5000);assert.equal(result.fileCount,3);});
