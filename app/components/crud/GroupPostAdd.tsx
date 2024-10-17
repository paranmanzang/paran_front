import { useState } from "react"
import PostEditor from "./PostEditor";

export default function GroupPostAdd() {
  const [formData, setFormData] = useState({  });
  return (
    <div>
        <PostEditor onSubmit={() => {}}/>
    </div>
  )
}
