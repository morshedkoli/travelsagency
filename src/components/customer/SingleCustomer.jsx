import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function SingleCustomer({customer}) {
  return (
    <Card>
    <CardHeader>
      <CardTitle>{customer["name"]}</CardTitle>
      <CardDescription>{customer["address"]}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{customer["number"]}</p>
      <p>{customer["email"]}</p>
    </CardContent>
    <CardFooter >
      <p>{Date(customer["updatedAt"])}</p>
    
    </CardFooter>
  </Card>
  
  )
}


// name    String
// address String
// number  String
// email   String