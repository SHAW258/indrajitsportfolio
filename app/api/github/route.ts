import { fetchGitHubProjects } from '@/lib/github'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const projects = await fetchGitHubProjects('SHAW258')
    return NextResponse.json(projects)
  } catch (error) {
    console.error('[v0] GitHub API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}
