"use client"


import { profile } from "@/app/constants/config"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()

  //   console.log("Form submitted:", formData)
  // }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-muted-foreground">
          Interested in working together? Let`s build something amazing!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="glass rounded-lg p-6 space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">
                    Paris, France or Remote / Global
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Open to opportunities</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Full-time positions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Contract work
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Consulting projects
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                Open source collaboration
              </li>
            </ul>
          </div>
        </div>

        {/* <form
          onSubmit={handleSubmit}
          className="glass rounded-lg p-6 space-y-4"
        >
          <h3 className="text-xl font-semibold">Send a Message</h3>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>

          <Button type="submit" className="w-full">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form> */}
      </div>
    </div>
  )
}
