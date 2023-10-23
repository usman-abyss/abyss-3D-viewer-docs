<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/121781416?v=4',
    name: 'Usman Ahmed',
    title: 'Docs Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/usman-abyss' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/129025800?v=4',
    name: 'Saqib Suleman',
    title: 'Docs Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/saqib-abyss' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/114464035?v=4',
    name: 'Rabiya Adnan',
    title: 'Docs Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/rabiyaadnan' },
    ]

  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/33480365?v=4',
    name: 'Qian Chen',
    title: 'Docs Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/chen-qian-dan-work' },
    ]
  }

]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
