Search.setIndex({docnames:["client","correlater","hooks","index","introduction","logger","nazcodec","queue","ratelimiter","sequence","state","throttle"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["client.rst","correlater.rst","hooks.rst","index.rst","introduction.rst","logger.rst","nazcodec.rst","queue.rst","ratelimiter.rst","sequence.rst","state.rst","throttle.rst"],objects:{"naz.client":{Client:[0,1,1,""]},"naz.client.Client":{__init__:[0,2,1,""],build_submit_sm_pdu:[0,2,1,""],connect:[0,2,1,""],deliver_sm_resp:[0,2,1,""],enquire_link:[0,2,1,""],enquire_link_resp:[0,2,1,""],parse_response_pdu:[0,2,1,""],receive_data:[0,2,1,""],send_data:[0,2,1,""],send_forever:[0,2,1,""],speficic_handlers:[0,2,1,""],submit_sm:[0,2,1,""],tranceiver_bind:[0,2,1,""],unbind:[0,2,1,""],unbind_resp:[0,2,1,""]},"naz.correlater":{BaseCorrelater:[1,1,1,""],SimpleCorrelater:[1,1,1,""]},"naz.correlater.BaseCorrelater":{get:[1,2,1,""],put:[1,2,1,""]},"naz.correlater.SimpleCorrelater":{__init__:[1,2,1,""],delete_after_ttl:[1,2,1,""],get:[1,2,1,""],put:[1,2,1,""]},"naz.hooks":{BaseHook:[2,1,1,""],SimpleHook:[2,1,1,""]},"naz.hooks.BaseHook":{request:[2,2,1,""],response:[2,2,1,""]},"naz.hooks.SimpleHook":{__init__:[2,2,1,""],request:[2,2,1,""],response:[2,2,1,""]},"naz.logger":{BaseLogger:[5,1,1,""],SimpleBaseLogger:[5,1,1,""]},"naz.logger.BaseLogger":{bind:[5,2,1,""],log:[5,2,1,""]},"naz.logger.SimpleBaseLogger":{__init__:[5,2,1,""],bind:[5,2,1,""],log:[5,2,1,""]},"naz.nazcodec":{BaseNazCodec:[6,1,1,""],SimpleNazCodec:[6,1,1,""]},"naz.nazcodec.BaseNazCodec":{decode:[6,2,1,""],encode:[6,2,1,""]},"naz.nazcodec.SimpleNazCodec":{decode:[6,2,1,""],encode:[6,2,1,""]},"naz.q":{BaseOutboundQueue:[7,1,1,""],SimpleOutboundQueue:[7,1,1,""]},"naz.q.BaseOutboundQueue":{dequeue:[7,2,1,""],enqueue:[7,2,1,""]},"naz.q.SimpleOutboundQueue":{__init__:[7,2,1,""],dequeue:[7,2,1,""],enqueue:[7,2,1,""]},"naz.ratelimiter":{BaseRateLimiter:[8,1,1,""],SimpleRateLimiter:[8,1,1,""]},"naz.ratelimiter.BaseRateLimiter":{limit:[8,2,1,""]},"naz.ratelimiter.SimpleRateLimiter":{__init__:[8,2,1,""],limit:[8,2,1,""]},"naz.sequence":{BaseSequenceGenerator:[9,1,1,""],SimpleSequenceGenerator:[9,1,1,""]},"naz.sequence.BaseSequenceGenerator":{next_sequence:[9,2,1,""]},"naz.sequence.SimpleSequenceGenerator":{__init__:[9,2,1,""],next_sequence:[9,2,1,""]},"naz.state":{CommandStatus:[10,1,1,""],DataCoding:[10,1,1,""],SmppCommand:[10,1,1,""],SmppCommandStatus:[10,1,1,""],SmppDataCoding:[10,1,1,""],SmppOptionalTag:[10,1,1,""],SmppSessionState:[10,1,1,""]},"naz.state.CommandStatus":{code:[10,3,1,""],description:[10,3,1,""],value:[10,3,1,""]},"naz.state.DataCoding":{code:[10,3,1,""],description:[10,3,1,""],value:[10,3,1,""]},"naz.throttle":{BaseThrottleHandler:[11,1,1,""],SimpleThrottleHandler:[11,1,1,""]},"naz.throttle.BaseThrottleHandler":{allow_request:[11,2,1,""],not_throttled:[11,2,1,""],throttle_delay:[11,2,1,""],throttled:[11,2,1,""]},"naz.throttle.SimpleThrottleHandler":{__init__:[11,2,1,""],allow_request:[11,2,1,""],not_throttled:[11,2,1,""],throttle_delay:[11,2,1,""],throttled:[11,2,1,""]},naz:{client:[0,0,0,"-"],correlater:[1,0,0,"-"],hooks:[2,0,0,"-"],logger:[5,0,0,"-"],nazcodec:[6,0,0,"-"],q:[7,0,0,"-"],ratelimiter:[8,0,0,"-"],sequence:[9,0,0,"-"],state:[10,0,0,"-"],throttle:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute"},terms:{"16be":6,"20min":4,"2billion":1,"\u30c4":4,"byte":[0,6],"class":[0,1,2,4,5,6,7,8,9,10,11],"default":4,"final":4,"float":[1,8,11],"function":0,"h\u00fclk":6,"import":[0,4,8,11],"int":[0,1,5,7,9],"long":[4,11],"return":[0,1,2,4,5,6,7,8,9,11],"short":[0,4],"try":4,"while":0,"zo\u00e3":6,"zo\u00eb":6,AND:11,And:4,For:4,One:1,REs:4,SMS:0,That:[0,4],The:[0,1,4,5,7,9,11],__init__:[0,1,2,4,5,7,8,9,11],abc:[1,2,5,6,7,8,9,11],abil:4,about:4,abov:[4,11],abstracteventloop:[0,7],acct:0,accur:[2,9],acknowledg:0,activ:4,addhandl:4,addit:0,addr_npi:0,addr_ton:0,address:0,address_rang:0,after:[0,1,2,4,8,11],again:11,algorithm:[4,8],alia:10,all:[0,1,4,5],allow:[4,8,9],allow_request:11,also:[0,1,4,6],among:1,ani:[0,1,2,4,5,7,11],annot:4,anoth:[1,4],anymor:11,anyth:4,api:4,app:3,applic:[0,1,2,4],argument:0,around:[1,9],arrang:0,artist:4,associ:0,async_loop:[0,4],asynchron:0,asyncio:[0,4],authent:0,auto:1,avail:8,await:[4,8],backward:4,band:4,base:[0,1,2,5,6,7,8,9,10,11],basecorrelat:1,basehook:[2,4],baselogg:[4,5],basenazcodec:6,baseoutboundqueu:[0,4,7],baseratelimit:[4,8],basesequencegener:9,basethrottlehandl:[4,11],basi:1,been:[0,5],befor:[0,2,4,8,11],best:1,between:[0,1,4],bind:[0,4,5],bind_receiv:0,bind_transceiv:0,bit:6,block:0,bodi:0,body_data:0,bool:[0,11],bring:4,bucket:[4,8],buffer:0,build:0,build_submit_sm_pdu:0,byte_str:6,calcul:11,call:[0,1,2,4,5,6,7,11],can:[0,4,5,6,7,8,10],canari:4,caption:[],center:4,chang:4,charact:6,check:[0,4,8],choos:5,cli:3,client:[4,5,8,11],client_id:[0,4],close:4,cmt:0,code:[0,10],codec:6,codec_class:0,codec_errors_level:0,com:5,come:1,command:[1,2,10],command_status_valu:0,commandlin:4,commandstatu:[2,10],commit:4,compos:4,condit:11,config:4,conn:4,connect:[0,4],consult:4,consum:4,contain:4,content:4,continu:4,control:[0,4,8],correl:[1,2,9],correlat:3,correlatinid:4,correlation_handl:0,correspond:0,counter:4,creat:4,current:4,cursor:4,custom:[4,8],customer_id:5,data:[0,4,10],databas:4,datacod:10,debug:[0,4,5],decid:[4,11],decis:11,declar:0,decod:[0,6],def:4,defin:[0,6],delay_for_token:8,delet:1,delete_after_ttl:1,deliv:4,deliver_sm:[1,4],deliver_sm_resp:0,deliveri:[0,1,4],demo:[4,7],deni:[4,11],deny_request_at:[4,11],depend:4,dequeu:[0,4,7],deriv:4,descript:[4,10],design:[0,4],dest_addr_npi:0,dest_addr_ton:0,destin:0,destination_addr:[0,4],determin:11,develop:[4,5],dict:[0,5,7],dictionari:[1,4],did:[],differ:[0,1,2],directori:4,docker:4,document:4,doe:[0,4,8,11],domain:0,done:1,down:0,durat:[8,11],each:4,echo:[],effort:1,enabl:[5,11],encod:[0,6,10],encoding1:0,enqueu:[0,4,7],enquire_link:[0,4],enquire_link_interv:0,enquire_link_resp:0,entiti:4,environ:4,equal:8,error:[0,4,6],esm:[0,4],esm_class:0,esme_rthrottl:4,etc:6,even:4,event:[0,4,5,7],eventlooppolici:4,everytim:[5,11],everywher:3,exampl:[0,4,5,6,8],example_config:4,examplequeu:4,exce:11,except:4,execut:4,exist:0,expir:1,extern:4,fals:[0,11],featur:[1,3],field:[0,10],file:4,finish:8,flag:0,flow:0,follow:4,form:[],format:4,formatt:4,found:4,from:[0,1,2,4,6,11],gatewai:[0,4],gather:4,gener:[0,4,8,9],get:[0,1,4,11],get_event_loop:[0,4],getenv:0,getlogg:4,give:4,given:[1,6],goe:11,going:1,googl:5,got:11,greater:[4,11],gsm0338:[0,6],gsm:6,guarante:1,had:[1,2,8],hand:0,handl:[3,11],handler:[0,4,11],happen:4,has:4,have:[0,4,11],hello:4,help:[2,9],here:[0,4],hip:4,hold:4,hook:[0,3],hook_metadata1:1,hook_metadata2:1,hook_metadata:[0,1,2,4],hop:4,host:4,how:[4,11],howev:1,http:5,ident:0,identifi:[0,1],ignor:6,implement:[0,1,2,4,5,6,7,8,9,11],implemet:0,impos:11,inbuilt:4,inc:4,includ:[0,5],incompat:4,increas:9,increment:4,indic:0,info:5,inform:4,inherit:[1,2,5,6,7,8,9,11],initi:[2,9],inject:4,inlin:[],input:6,instal:3,instanc:0,instanti:5,integ:9,interact:0,interfac:[1,2,4,5,6,7,8,9,11],interface_vers:0,introduct:3,item:[0,1,4,7],item_to_enqueu:4,iter:1,its:0,itself:[5,11],join:4,json:[4,5],just:[0,2,4,11],keep:4,kei:[1,4],kenyan:4,kick:8,know:[],kvlog:4,kvlogger:4,last:11,later:[0,4],let:[4,8],level:[0,4,5],leverag:4,librari:3,like:[0,1,4,5],limit:[0,3,8,11],list:0,listen:0,load:[4,11],log:[0,2,3,5],log_data:[4,5],log_handl:[0,4],log_id1:1,log_id2:1,log_id:[0,1,2,4],log_metadata:[0,4,5],logger:[2,3,4,8,11],logger_nam:5,loglevel:[0,4,5],look:1,loop:[0,4,7],mai:[1,2,4,8,11],make:[0,4,11],mandat:1,mandatori:4,manner:[4,5],max_token:8,max_ttl:1,maximum:[7,8,9],maxsiz:[0,4,7],mean:0,mechan:[0,4],memori:[1,7],mesag:8,messag:[0,1,2,4,5,6,8],metadata:[0,5],method:[0,1,2,4,5,6,7,8,9,11],metric:4,minimum:11,mode:0,monitor:3,monoton:9,more:[4,11],msg:0,msisdn:0,must:[1,2,5,6,7,8,9,11],my_config:4,my_queu:4,my_request:4,my_respons:4,myfil:4,myhook:4,myid12345:4,mykvlogg:4,mylimit:4,mylogg:[5,8],myprometheushook:4,mysmsdb:4,name:[0,4,5],naz:[0,1,2,5,6,7,8,9,10,11],nazcodec:3,nazizi:4,ncodec:6,need:4,network:0,next_sequ:9,none:[0,1,2,5,7,8,9,11],not_throttl:11,note:[1,7],notif:[1,4],notifi:5,npi:0,number:[0,1,4,7,8,10,11],object:[0,4,6,10],observ:3,occur:4,older:1,omit:1,one:[1,2],onli:[4,7],option:[0,1,10],origin:0,other:[1,4],ought:9,out:[0,4],outbound:7,outboundqueu:[0,4],outgo:4,over:[0,1,4,11],own:4,pane:[],paramet:[0,1,2,4,5,6,7,8,10,11],pars:0,parse_response_pdu:0,parti:4,particular:[1,11],pass:[0,4],password:[0,4],pdu:0,per:4,percent:11,percentag:[4,11],period:[0,4],pip:4,plan:0,port:0,predefin:0,previous:[1,2],print:4,prioriti:0,priority_flag:0,product:4,prometheu:4,prometheus_cli:4,protocol:[0,4],protocol_id:0,purpos:[4,7],put:[1,7],put_nowait:4,python3:4,python:[0,1,4,6],queu:[0,3],queue:[0,3,4],rabbitmq:4,rang:[0,4,9],rate:[0,3,8,11],ratelimit:[0,3,4],reach:9,read:[0,4],reader:4,reason:[1,4,11],receipt:0,receipted_message_id:1,receiv:2,receive_data:[0,4],recipi:0,record:4,redi:4,registered_deliveri:0,regul:11,relat:[0,1],releas:4,reliabl:1,render:[4,5],replac:0,replace_if_present_flag:0,repli:[4,11],repo:4,represenst:10,request:[0,2,4,8,9,11],requir:[0,4],respect:0,respons:[0,2,4,9,11],result:0,round:4,rout:[0,4],run:[0,4],run_forev:4,run_until_complet:4,sai:4,said:0,same:[0,6],sample_s:[4,11],sampling_period:[4,11],satisfi:[1,2,4,5,6,7,8,9,11],save:7,schedul:0,schedule_delivery_tim:0,scheme:6,second:[0,1,4,8,11],see:[2,9],self:[1,2,4,9,11],send:[0,4,8,11],send_data:0,send_forev:[0,4],send_messsag:8,send_rat:[4,8],sender:0,sens:4,sent:[0,2],sequenc:[0,1,3],sequence_gener:0,sequence_numb:[0,1,9],sequence_number1:1,serv:0,server:[0,4,8],servic:[0,4],service_typ:0,session:[0,10],session_nam:[],set:[4,6],set_event_loop_polici:4,setformatt:4,setlevel:4,setmessagestatehook:4,setup:4,shell_command:[],ship:4,short_messag:[0,4],shorthand:[],should:[0,1,2,4,5,6,7,8,9,11],show:4,shown:[1,2,5,6,7,8,9,11],signatur:[1,2,5,6,7,8,9,11],signifi:0,simpl:[1,4],simplebaselogg:5,simplecorrelat:1,simplehook:[2,4],simplenazcodec:6,simpleoutboundqueu:[0,4,7],simpleratelimit:[4,8],simplesequencegener:9,simplethrottlehandl:[4,11],simul:4,singl:0,size:7,sm_default_msg_id:0,sme:0,smpp:[0,1,4,6,9,10,11],smpp_command:[0,1,2,4],smppclient1:[0,4],smppcommand:[4,10],smppcommandstatu:10,smppdatacod:10,smppoptionaltag:10,smppsessionst:10,smsc:[0,1,2,4,8,11],smsc_host:[0,4],smsc_message_id1:1,smsc_message_id:1,smsc_port:[0,4],smsc_respons:[2,4],smstabl:4,some:0,someth:5,sometim:4,sourc:[0,1,2,5,6,7,8,9,10,11],source_addr:[0,4],source_addr_npi:0,source_addr_ton:0,specif:[0,9],specifi:[1,4,8],speficic_handl:0,sql:4,sqlite3:4,standard:6,start:[0,4,11],state:[3,4],statehook:4,statement:[0,5],statu:[0,4,10,11],status:10,stop:4,storag:1,store:[0,1],stored_at:1,str:[0,1,2,4,5,6],streamhandl:4,streamread:0,streamwrit:0,strict:0,string:[0,1,2,4,6],string_to_encod:6,structur:5,style:4,submit:0,submit_sm:[0,1,2,4],submit_sm_resp:[1,2],suppli:[1,2,4,5],support:[0,4],suppos:4,surpass:4,system:0,system_id:[0,4],system_typ:0,tabl:4,tag:[1,10],take:[0,4],talk:4,task:4,termin:4,test:[0,4,7],than:[1,4,11],thei:[5,8],them:0,thi:[0,1,2,4,5,6,7,8,9,11],third:4,those:4,throparserttl:0,throtll:[4,11],throttl:[0,3],throttle_delai:11,throttle_handl:[0,4],throttle_wait:11,throttler:4,through:0,thu:[4,11],time:[0,1,11],tmp:4,todo:0,token:[4,8],total:[4,8,11],track:[1,2],tranceiv:4,tranceiver_bind:[0,4],transceiv:0,transfer:4,tupl:[0,1,10],two:4,type:[0,1,2,5,6,7,8,9,11],unbind:[0,4],unbind_resp:0,under:[4,11],union:[0,1],uniqu:[0,1],updat:4,upto:4,url:5,usag:[3,5,6,8],use:[1,4],used:[0,4,6,7],user:[0,1,2,5,6,7,8,9,11],uses:[0,1,4,6],using:[0,1,4,8],usual:6,utf8:6,utf:6,uvloop:4,valid:0,validity_period:0,valu:[1,4,8,10],variou:[0,10],version:[0,4,6],via:[0,4,11],wai:[4,5,11],wait:[0,8,11],want:[1,2,4,5],watch:4,web_request:5,wether:11,what:0,whatev:[4,11],when:[0,2,4,5,9,11],whenev:[4,5],where:4,whether:0,which:[0,4,8,9,10,11],wikipedia:4,window:[],window_nam:[],wire:0,work:[4,11],world:4,would:[0,4],wrap:[1,9],write:[0,4],writer:4,www:5,you:[0,4,8],your:4},titles:["Client","correlater","hooks","naz - naz is an async SMPP client.","Introduction to naz","logger","nazcodec","queue","ratelimiter","sequence","state","throttle"],titleterms:{api:3,app:4,async:[3,4],cli:4,client:[0,3],content:3,correlat:1,everywher:4,featur:4,handl:4,hook:[2,4],instal:4,introduct:4,librari:4,limit:4,log:4,logger:5,monitor:4,naz:[3,4],nazcodec:6,observ:4,queu:4,queue:7,rate:4,ratelimit:8,refer:3,sequenc:9,smpp:3,state:10,throttl:[4,11],usag:4}})