const n=(h,i,r)=>(i.children&&i.children.forEach(c=>{h?r.checked.push(c.id):r.checked=r.checked.filter(l=>l!==c.id),n(h,c,r)}),r.checked);export{n as c};
