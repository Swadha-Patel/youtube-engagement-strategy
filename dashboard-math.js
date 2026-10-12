(function(root){
const total=(rows,k)=>rows.reduce((s,r)=>s+r[k],0);
function youtube(rows){const impressions=total(rows,'impressions'),views=total(rows,'views'),minutes=total(rows,'watchMinutes');return {impressions,views,minutes,hours:minutes/60,ctr:impressions?views/impressions:0,avd:views?minutes/views:0,hoursPerThousand:impressions?minutes/60/impressions*1000:0}}
function compare(rows){const sum=v=>{const rs=rows.filter(r=>r.variant===v);return Object.fromEntries(['starts','details','submitted','paid','refunded'].map(k=>[k,total(rs,k)]))};const a=sum('Control'),b=sum('Guest-first'),p0=a.paid/a.starts,p1=b.paid/b.starts,diff=p1-p0,se=Math.sqrt(p0*(1-p0)/a.starts+p1*(1-p1)/b.starts);return {a,b,p0,p1,diff,low:diff-1.96*se,high:diff+1.96*se,relative:diff/p0,abandonmentReduction:diff/(1-p0)}}
function scenario(s,ctrLift,avdLift){const projectedCTR=Math.min(1,s.ctr*(1+ctrLift)),views=s.impressions*projectedCTR,avd=s.avd*(1+avdLift);return {views,avd,hours:views*avd/60,delta:views*avd/60-s.hours}}
const api={youtube,compare,scenario};root.DashboardMath=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
