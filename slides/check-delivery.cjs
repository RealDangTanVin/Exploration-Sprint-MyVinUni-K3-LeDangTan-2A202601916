const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=__dirname;
const html=fs.readFileSync(path.join(root,'pitch-10-phut.html'),'utf8');
const code=html.match(/<script>([\s\S]*?)<\/script>/)[1];
const classes=new Set(),els=new Map(),events={};
const get=id=>{if(!els.has(id))els.set(id,{classList:{toggle(){}},textContent:'',disabled:false});return els.get(id)};
const context={document:{getElementById:get,addEventListener:(n,f)=>events[n]=f,body:{classList:{toggle:n=>{classes.has(n)?classes.delete(n):classes.add(n)}},requestFullscreen:async()=>{}},exitFullscreen:async()=>{}},Date,setInterval:()=>0,console};
vm.createContext(context);vm.runInContext(code,context);
function assert(test,message){if(!test)throw new Error(message)}
assert(get('position').textContent==='1 / 10','Viewer must open on slide 1');
assert(get('prev').disabled,'Previous button must be disabled at start');
for(let i=1;i<=10;i++){
 assert(get('slide').src.startsWith('data:image/png;base64,'),'Offline image missing at '+i);
 assert(get('notes').textContent.length>200,'Speaker notes missing at '+i);
 if(i<10)get('next').onclick();
}
assert(get('position').textContent==='10 / 10','Navigation must reach slide 10');
assert(get('next').disabled,'Next button must be disabled at end');
events.keydown({key:'Home',preventDefault(){}});
assert(get('position').textContent==='1 / 10','Home shortcut failed');
events.keydown({key:'n',preventDefault(){}});
assert(classes.has('with-notes'),'Notes shortcut failed');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json'),'utf8'));
assert(manifest.length===10 && manifest.reduce((a,b)=>a+b.seconds,0)===600,'Invalid slide count or timing');
console.log('Delivery check: 10 offline images, 10 speaker notes, navigation, 600-second plan.');
