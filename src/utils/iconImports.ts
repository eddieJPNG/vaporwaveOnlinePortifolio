const skillIcons = import.meta.glob<{ default: string }>(
  '../assets/icons/**/*.{png,svg,jpg,webp}',
  {
    eager: true,
  }
);

const profileImages = import.meta.glob<{ default: string }>(
  '../assets/images/profile/*.{png,jpg,webp}',
  {
    eager: true,
  }
);

const projectImages = import.meta.glob<{ default: string }>(
  '../assets/images/projects/*.{png,jpg,webp}',
  {
    eager: true,
  }
);

function resolveIcon(map: Record<string, { default: string }>, key: string): string | undefined {
  const entry = Object.entries(map).find(([path]) => {
    const fileName = path.split('/').pop()?.split('.')[0];
    return fileName === key;
  });
  return entry?.[1].default;
}

export function getSkillIcon(skillId: string): string | undefined {
  return resolveIcon(skillIcons, skillId);
}

export function getProfileImage(): string | undefined {
  const entry = Object.values(profileImages)[0];
  return entry?.default;
}

export function getProjectImage(projectId: string): string | undefined {
  return resolveIcon(projectImages, projectId);
}
