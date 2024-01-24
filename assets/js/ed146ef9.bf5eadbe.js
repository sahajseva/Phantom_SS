"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",slug:"kubectl-cheat-sheet",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-15-kubectl-cheat-sheet/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/kubectl-cheat-sheet",source:"@site/blog/2023-12-15-kubectl-cheat-sheet.md",title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",date:"2023-12-15T00:00:00.000Z",formattedDate:"December 15, 2023",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"docker",permalink:"/blog/tags/docker"}],readingTime:9.235,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Kubectl Cheat Sheet - With Examples",description:"Kubectl is a very handy tool if you want to manage your applications deployed in Kubernetes.",slug:"kubectl-cheat-sheet",authors:"muhammad_khabbab",tags:["kubernetes","docker"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-12-15-kubectl-cheat-sheet/social.png",hide_table_of_contents:!1},prevItem:{title:"Introduction to Chakra UI",permalink:"/blog/chakra-ui"},nextItem:{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",permalink:"/blog/kubernetes-persistent-volumes"},relatedPosts:[{title:"A Detailed Guide on Docker run Command",description:"We'll discuss the Docker run command in detail, including its syntax, options, and examples.",permalink:"/blog/docker-run-command",formattedDate:"June 24, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.855,date:"2023-06-24T00:00:00.000Z"},{title:"A Guide for Delete Pods from Kubernetes Nodes - kubectl delete",description:"We'll learn how to delete pods from Kubernetes nodes using the kubectl delete command.",permalink:"/blog/kubectl-delete-pod",formattedDate:"November 20, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.225,date:"2023-11-20T00:00:00.000Z"},{title:"Introduction to Docker Compose",description:"We'll go over the basics of Docker Compose in this article, including what it is, how it works, and how to use it.",permalink:"/blog/docker-compose",formattedDate:"July 31, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.205,date:"2023-07-31T00:00:00.000Z"}],authorPosts:[{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.11,date:"2022-12-28T00:00:00.000Z"},{title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",permalink:"/blog/git-diff-command",formattedDate:"May 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.915,date:"2023-05-12T00:00:00.000Z"},{title:"How to deploy Postgres on Kubernetes",description:"This article will serve as a guide for installing PostgreSQL on Kubernetes, covering pre-requisites such as setting up Kubectl, Kubernetes clusters, and Docker.",permalink:"/blog/postgres-on-kubernetes",formattedDate:"January 22, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.045,date:"2024-01-22T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setup and Basic Commands",id:"setup-and-basic-commands",level:2},{value:"Installing kubectl: version",id:"installing-kubectl-version",level:3},{value:"Basic Syntax",id:"basic-syntax",level:3},{value:"Cluster Management and Context",id:"cluster-management-and-context",level:2},{value:"Viewing Cluster Info",id:"viewing-cluster-info",level:3},{value:"Switching Context",id:"switching-context",level:3},{value:"Working with Namespaces",id:"working-with-namespaces",level:2},{value:"Namespace Creation",id:"namespace-creation",level:3},{value:"Namespace Listing",id:"namespace-listing",level:3},{value:"Namespace Deletion",id:"namespace-deletion",level:3},{value:"Management of pods and deployment",id:"management-of-pods-and-deployment",level:2},{value:"Pods Creating",id:"pods-creating",level:3},{value:"Get list of pods",id:"get-list-of-pods",level:3},{value:"Deleting Pods",id:"deleting-pods",level:3},{value:"Creating Deployments",id:"creating-deployments",level:3},{value:"Listing deployments",id:"listing-deployments",level:3},{value:"<strong>Handling Services and Nodes</strong>",id:"handling-services-and-nodes",level:2},{value:"Manage Services",id:"manage-services",level:3},{value:"List Nodes",id:"list-nodes",level:3},{value:"Advanced Resource Management",id:"advanced-resource-management",level:2},{value:"Kubectl Labels",id:"kubectl-labels",level:3},{value:"Scale deployments with kubectl",id:"scale-deployments-with-kubectl",level:3},{value:"<strong>Debugging and Logs</strong>",id:"debugging-and-logs",level:2},{value:"Log Access",id:"log-access",level:3},{value:"Tailing Logs",id:"tailing-logs",level:3},{value:"<strong>Secrets and ConfigMaps</strong>",id:"secrets-and-configmaps",level:2},{value:"Creating Secrets",id:"creating-secrets",level:3},{value:"Using ConfigMaps",id:"using-configmaps",level:3},{value:"<strong>Useful Tips and Tricks</strong>",id:"useful-tips-and-tricks",level:2},{value:"Aliases for efficiency",id:"aliases-for-efficiency",level:3},{value:"Kubectl Autocomplete for Faster Command Completion",id:"kubectl-autocomplete-for-faster-command-completion",level:3},{value:"Using Kubectl Port-Forward for Accessing Services Locally",id:"using-kubectl-port-forward-for-accessing-services-locally",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c};function d(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Kubernetes is a famous container orchestration tool that is very popular in modern software development. If you are using Kubernetes, you must have used Kubectl, which is the command line tool to manage your Kubernetes applications. This guide will walk you through the most frequently used commands for Kubectl. Not only will we discuss the important commands, but we will also discuss the practical code examples and the common errors that are faced during their execution. Some examples of what it can do includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Management of your pods"),(0,a.kt)("li",{parentName:"ul"},"Management of your deployments"),(0,a.kt)("li",{parentName:"ul"},"Management of your services"),(0,a.kt)("li",{parentName:"ul"},"And many more")),(0,a.kt)("p",null,"Now, we may not be able to cover each and every command, but be assured that the commands discussed below will certainly be of value if your application is using Kubernetes. Let's start with the basic one i.e. installation and setup of Kubectl."),(0,a.kt)("h2",{id:"setup-and-basic-commands"},"Setup and Basic Commands"),(0,a.kt)("h3",{id:"installing-kubectl-version"},"Installing kubectl: version"),(0,a.kt)("p",null,"Checks kubectl installation and version."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common errors:")," command not found (No kubectl installed)."),(0,a.kt)("p",null,"Refused connection to localhost:8080: Kubernetes cluster is not running or kubectl is misconfigured."),(0,a.kt)("h3",{id:"basic-syntax"},"Basic Syntax"),(0,a.kt)("p",null,"The basic syntax of any kubectl command is: ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl [command] Type [name] [flags]"),"\nNote that 'TYPE' and 'NAME' are context-dependent and may not be required in that order."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("p",null,"Command include get, describe, and create."),(0,a.kt)("p",null,"Type: pod, service."),(0,a.kt)("p",null,"Name: Optional for commanding all resources of a type."),(0,a.kt)("p",null,"Optional flags, like ",(0,a.kt)("inlineCode",{parentName:"p"},"--namespace")," ."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n mynamespace")),(0,a.kt)("p",null,"This command lists all 'mynamespace' pods."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("p",null,"Use the -n or --namespace flag to specify the namespace."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n mynamespace")," with -o or --output for output formats like json or yaml. E.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pod mypod json")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Errors:"),' Invalid namespace or output format can cause server errors like "Not Found".'),(0,a.kt)("h2",{id:"cluster-management-and-context"},"Cluster Management and Context"),(0,a.kt)("h3",{id:"viewing-cluster-info"},"Viewing Cluster Info"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info")),(0,a.kt)("p",null,"Displays cluster master and service endpoints."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," This option specifies the kubeconfig file."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Errors:")," Unable to connect to server due to network or connection issues."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info --kubeconfig=/myconfig")),(0,a.kt)("h3",{id:"switching-context"},"Switching Context"),(0,a.kt)("p",null,"Switches one context to another."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config use-context [context_name]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")," It is most of the time used without any specific flags"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Errors:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"error: no context exists with the name: [context_name]")," : If context does not exist."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config use-context staging-context")),(0,a.kt)("h2",{id:"working-with-namespaces"},"Working with Namespaces"),(0,a.kt)("p",null,"Kubernetes namespaces segment and manage resources. Important namespace operations are below."),(0,a.kt)("h3",{id:"namespace-creation"},"Namespace Creation"),(0,a.kt)("p",null,"This simple command creates a Kubernetes namespace. Due to its specific functionality, it has few variants and flags.\n",(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,"Create a dev namespace using: ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create namespace dev")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Errors:")),(0,a.kt)("p",null,"Trying to create an existing namespace.\n",(0,a.kt)("strong",{parentName:"p"},"Common flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--dry-run")," Shows the namespace without creating it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-o [format]")," Outputs details in yaml or json format.")),(0,a.kt)("h3",{id:"namespace-listing"},"Namespace Listing"),(0,a.kt)("p",null,"This command displays all Kubernetes namespaces."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\nSimple list: ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get namespaces"),"\nDetailed list: ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get namespaces -o wide")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Errors:"),"\nUsing wrong flags or formats."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-o wide"),": Shows namespace details like age."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-o json")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-o yaml")," The details are output in JSON or YAML."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--show-labels"),": It shows Namespace labels.")),(0,a.kt)("h3",{id:"namespace-deletion"},"Namespace Deletion"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete [namespace_name]")),(0,a.kt)("p",null,"This removes a namespace and its resources. Be careful since this is an irreversible operation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\nYou can delete test namespace using: ",(0,a.kt)("inlineCode",{parentName:"p"},"Run kubectl delete namespace test")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Errors:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Trying to delete a system or nonexistent namespace.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Not migrating or backing up namespace resources."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Common Flags:")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--grace-period=[seconds]")," Allows setting a grace period before deletion."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"--force")," to delete the namespace forecibly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--cascade")," : Decides whether to delete namespace resources or not.")),(0,a.kt)("h2",{id:"management-of-pods-and-deployment"},"Management of pods and deployment"),(0,a.kt)("h3",{id:"pods-creating"},"Pods Creating"),(0,a.kt)("p",null,"Pods are created with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl run [pod_name]. --image=[image_name]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--env")," Configure environment variables."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-l, --labels")," Labels the pod."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--dry-run")," Simulate pod-making. It is useful for testing on QA/Staging before deployment to production.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\nUsing the 'nginx' image to create 'nginx-pod' ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl run nginx-pod --image=nginx")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"Error: image not found")," error occurs when the container image does not exist."),(0,a.kt)("h3",{id:"get-list-of-pods"},"Get list of pods"),(0,a.kt)("p",null,"See all the pods in currently set namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-o wide ")," To display the details like node name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--show-labels")," Labels also display for each pod.\n",(0,a.kt)("strong",{parentName:"li"},"Example:"),(0,a.kt)("inlineCode",{parentName:"li"},"kubectl get pods -o wide")," will show all pods with all their details.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"No resources found")," error occurs when the namespace has no pods."),(0,a.kt)("h3",{id:"deleting-pods"},"Deleting Pods"),(0,a.kt)("p",null,"The command to delete a pod is ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete pod [pod_name]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--grace-period"),": Pause before killing the pod forcibly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--force"),": Immediately delete pod forcibly.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete nginx-pod")," removes 'nginx-pod'."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\nA common error is ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod not found")," when the pod does not exist."),(0,a.kt)("h3",{id:"creating-deployments"},"Creating Deployments"),(0,a.kt)("p",null,"Creates a deployment with its name and image ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create deployment [name] --image=[image]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--replicas")," Set desired number of replicas."),(0,a.kt)("li",{parentName:"ul"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"--dry-run")," to simulate deployment instead of actual deployment.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\nUse the 'nginx' image to create 'nginx-deployment' ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create deployment nginx-deployment --image=nginx")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\nImage format errors often result in ",(0,a.kt)("inlineCode",{parentName:"p"},"Invalid image name")," errors."),(0,a.kt)("h3",{id:"listing-deployments"},"Listing deployments"),(0,a.kt)("p",null,"Shows namespace deployments ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get deployments")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-o wide")," Shows extra details like replica count."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,"Displays all deployments ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get deployments")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"No resources found")," error occurs when the namespace has no deployments."),(0,a.kt)("h2",{id:"handling-services-and-nodes"},(0,a.kt)("strong",{parentName:"h2"},"Handling Services and Nodes")),(0,a.kt)("h3",{id:"manage-services"},"Manage Services"),(0,a.kt)("p",null,"Overview\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get services")," helps users quickly view all Kubernetes cluster services and their status."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-o wide")," : Provides additional details for each service."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--all-namespaces")," You can see all the services present in all the namespaces."),(0,a.kt)("li",{parentName:"ul"},"`--watch```Monitors service changes and updates display.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get services -o wide"),"\nThis command will display all default namespace services in detail."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Services' service-name' not found")," Typing a service name incorrectly or querying a nonexistent service."),(0,a.kt)("h3",{id:"list-nodes"},"List Nodes"),(0,a.kt)("p",null,"Command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get nodes")," displays all cluster nodes for size and health assessment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-o wide")," Displays extra details like IP addresses, OS, kernel version, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--selecto")," Filters nodes by label."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--showlabels")," Shows node labels.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get nodes --selector=environment=production")," This command displays all production nodes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Connection to server localhost:8080 refused")," Usually due to incorrect kubectl configuration or inaccessible Kubernetes clusters."),(0,a.kt)("h2",{id:"advanced-resource-management"},"Advanced Resource Management"),(0,a.kt)("h3",{id:"kubectl-labels"},"Kubectl Labels"),(0,a.kt)("p",null,"Kubernetes labels are key-value pairs on pods. They organize and select object subsets. The command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -l ")," retrieves pods by label."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--l")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--selector"),": Specifies label selector"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--all-namespaces")," searches all namespaces"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-o' or "),"--output` Outputs the format (yaml, json)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -l app=myApp"),' lists all pods with the label "app" equal to myApp.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error"),":\nIncorrect label names or values often result in no results. Ensure pod labels are correct."),(0,a.kt)("h3",{id:"scale-deployments-with-kubectl"},"Scale deployments with kubectl"),(0,a.kt)("p",null,"Scaling deployments involves changing the number of pod replicas (instances). The ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl scale")," command does this magic."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--replicas")," Specifies number of copies needed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--current-replicas")," Current replica count (For conditional scaling)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--timeout:"),"Time to wait for scale operation completion")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl scale deployment myDeployment --replicas=5")," scales myDeployment to 5 replicas."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error"),":\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment not found")," error often occurs when scaling a nonexistent or misnamed deployment. The deployment name must be in the current namespace."),(0,a.kt)("h2",{id:"debugging-and-logs"},(0,a.kt)("strong",{parentName:"h2"},"Debugging and Logs")),(0,a.kt)("h3",{id:"log-access"},"Log Access"),(0,a.kt)("p",null,"Kubernetes pod logs can be retrieved using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs [pod_name]"),". Understanding pod-running applications and diagnosing issues requires this command."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs my-app-pod"),' will show logs of the pod named "my-app-pod".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'Error from server (NotFound): pods "my-app-pod" not found')," This error occurs when the Kubernetes cluster does not have any pod with this name."),(0,a.kt)("h3",{id:"tailing-logs"},"Tailing Logs"),(0,a.kt)("p",null,'You can stream or "tail" pod logs with ',(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs -f [pod_name]"),". This helps monitor log outputs in real-time, especially in dynamic environments."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs -f my-app-pod"),' Logs from the pod "my-app-pod" will be streamed live by this command.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},'Error from server (NotFound): pods "my-app-pod" not found'),". This error means the Kubernetes cluster does not have the specified pod."),(0,a.kt)("h2",{id:"secrets-and-configmaps"},(0,a.kt)("strong",{parentName:"h2"},"Secrets and ConfigMaps")),(0,a.kt)("h3",{id:"creating-secrets"},"Creating Secrets"),(0,a.kt)("p",null,"Kubernetes secrets store and manage passwords, OAuth tokens, and ssh keys. You can easily create these secrets with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create secret generic [secret_name] --from-literal=[key]=[value]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--from-literal")," This flag specifies secret data as key-value pairs on the command line."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--from-file")," Create secret from a file. In this case file name would be considered the key and its content will be the value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--dry-run")," Displays the object that would be sent to the cluster without actually sending it."),(0,a.kt)("li",{parentName:"ul"}),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--output")," or `-o' sets the output format (yaml or json).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create secret generic my-secret --from-literal=password=myStrongPassword")),(0,a.kt)("p",null,"This command creates a secret named my-secret with one entry: password and myStrongPassword."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:")),(0,a.kt)("p",null,"Incorrect or malformed key-value pairs are common when creating secrets. Following key=value format is essential."),(0,a.kt)("h3",{id:"using-configmaps"},"Using ConfigMaps"),(0,a.kt)("p",null,"Kubernetes ConfigMaps stores non-confidential data in key-value pairs. Configuration files, command-line arguments, environment variables, port numbers, etc. can be stored there. The format is ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create configmap [name] --from-literal=[key]=[value]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Flags")),(0,a.kt)("p",null,"Same as creating secrets (see above)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create configmap app-config --from-literal=app_mode=production")),(0,a.kt)("p",null,'A ConfigMap named "app-config" with app_mode set to production is created.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common Error:")),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"--from-file"),", referencing nonexistent files or directories is a common error. Verify file paths are correct and accessible."),(0,a.kt)("h2",{id:"useful-tips-and-tricks"},(0,a.kt)("strong",{parentName:"h2"},"Useful Tips and Tricks")),(0,a.kt)("h3",{id:"aliases-for-efficiency"},"Aliases for efficiency"),(0,a.kt)("p",null,"Using aliases for kubectl can speed up workflow by reducing keystrokes for each command."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alias k=kubectl"),"\nYou frequently check pod status. The alias lets you type ",(0,a.kt)("inlineCode",{parentName:"p"},"k get pods")," instead of typing the whole word of kubectl."),(0,a.kt)("h3",{id:"kubectl-autocomplete-for-faster-command-completion"},"Kubectl Autocomplete for Faster Command Completion"),(0,a.kt)("p",null,"Kubectl supports command-line autocompletion, saving significant time. This feature speeds up command, argument, and resource name completion."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Setting up autocomplete:")),(0,a.kt)("p",null,"Source the autocomplete script in your shell's configuration file. For bash, You can add ",(0,a.kt)("inlineCode",{parentName:"p"},"source <(kubectl completion bash) "),"to your ",(0,a.kt)("inlineCode",{parentName:"p"},".bashrc"),". Add ",(0,a.kt)("inlineCode",{parentName:"p"},"source <(kubectl completion zsh)")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")," file for zsh."),(0,a.kt)("p",null,"After setting up, typing a command like ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pod")," and pressing tab completes this command to ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods"),"."),(0,a.kt)("h3",{id:"using-kubectl-port-forward-for-accessing-services-locally"},"Using Kubectl Port-Forward for Accessing Services Locally"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl port-forward"),", you can access and interact with internal Kubernetes cluster services from your local machine."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl port-forward svc/my-web-app 5000:8080")," to forward a cluster service on port 8080."),(0,a.kt)("p",null,"The service's port 8080 receives traffic from your local machine's port 5000, so you can access the application at http://localhost:5000 in your browser."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Kubetcl is a very handy tool if you want to manage your applications deployed in Kubernetes. Whether you are a novice or a seasoned practitioner, this guide will help you on every step of your Kubernetes journey, whether you are creating a pod or scaling your cluster."),(0,a.kt)("p",null,"Give special attention to the different tips and tricks mentioned in this article because they will save you a lot of time and effort. We encourage you to try the commands mentioned in this article and get your hands dirty; that's the best way to master Kubectl."))}d.isMDXComponent=!0}}]);