import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] items-center justify-center py-12">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Project Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
